import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { TEAMS } from './src/data/teams.js'; // Use ESM-compatible import if tsx handles it or relative imports
import { fetchHistoricalMatches, trainRLModel, fetchHistoricalGoalscorers } from './server_rl_engine.js';

dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const PORT = 3000;

// Initialize Gemini SDK safely
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Single match detailed simulation endpoint
app.post('/api/simulate', async (req: Request, res: Response) => {
  try {
    if (!ai) {
      return res.status(500).json({
        error: 'Gemini API key is not configured in Secrets. Please configure GEMINI_API_KEY.',
      });
    }

    const { home_team, away_team, stage, userInstruction } = req.body;

    if (!home_team || !away_team) {
      return res.status(400).json({ error: 'home_team and away_team codes are required.' });
    }

    const t1Data = TEAMS[home_team] || { name: home_team, roster: [], rating: 80, attack: 80, midfield: 80, defense: 80 };
    const t2Data = TEAMS[away_team] || { name: away_team, roster: [], rating: 80, attack: 80, midfield: 80, defense: 80 };

    const t1RosterStr = t1Data.roster.map(p => `#${p.jersey} ${p.name} (${p.position})`).join(', ');
    const t2RosterStr = t2Data.roster.map(p => `#${p.jersey} ${p.name} (${p.position})`).join(', ');

    const prompt = `
      You are a highly advanced sports analytics ML engine trained on the following datasets:
      1. StatsBomb Open Data: Shot Event logs, pressure metrics, and Expected Goals (xG) calculations.
      2. International Football Results (1872 to 2026, martj42): Historic match margins, neutral ground offsets, and dynamic Elo ratings.
      3. FIFA World Cup 2026 Player Performance Dataset (rauffauzanrambe): Player overall ratings, attacking speeds, and defensive block indexes.
      4. 11-Model Tournament Synthesis: Incorporating predictive outcomes from 11 distinct statistical models crowning top-tier favorites (ARG, FRA, BRA, ENG) while simulating knockout surprises and realistic scorelines.

      Simulate a highly realistic football match for the FIFA World Cup 2026 Knockout Stage.
      Stage: ${stage || 'Knockout Round'}
      Home Team: ${t1Data.name} (${home_team}) - Rating: ${t1Data.rating || 80} (Attack: ${t1Data.attack || 80}, Midfield: ${t1Data.midfield || 80}, Defense: ${t1Data.defense || 80})
      Home Team Squad Roster & Jersey Numbers: ${t1RosterStr || 'Unknown'}
      
      Away Team: ${t2Data.name} (${away_team}) - Rating: ${t2Data.rating || 80} (Attack: ${t2Data.attack || 80}, Midfield: ${t2Data.midfield || 80}, Defense: ${t2Data.defense || 80})
      Away Team Squad Roster & Jersey Numbers: ${t2RosterStr || 'Unknown'}

      ${userInstruction ? `User tactical instructions/conditions: "${userInstruction}"` : ''}

      Calculate:
      1. The final score for regulation time (90 minutes) for both home and away teams based on the team ratings, player capabilities, and historic StatsBomb xG averages. Note that in regulation time, a draw is possible!
      2. The predicted winner of the match: either the 3-letter code of the winning team (e.g., "${home_team}", "${away_team}") or "Draw" if it is a draw in regulation time.
      3. The jersey numbers of the goal scorers for each team. The scorers MUST be chosen from the squad rosters provided above. If a team scores 0 goals, the scorer list must be empty.
      4. A brief, highly realistic sports narrative analysis (150-250 words) including key tactical match-ups, expected goals (xG), standout performers, and key minutes when goals were scored.

      Ensure the JSON response follows the schema exactly.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            predicted_home_score: {
              type: Type.INTEGER,
              description: "The home team's goals in regulation time.",
            },
            predicted_away_score: {
              type: Type.INTEGER,
              description: "The away team's goals in regulation time.",
            },
            predicted_winner: {
              type: Type.STRING,
              description: "Must be the 3-letter code of the winner (e.g. 'ARG' or 'BRA') or 'Draw' if scores are equal.",
            },
            predicted_scorers_home: {
              type: Type.ARRAY,
              items: { type: Type.INTEGER },
              description: "Array of jersey numbers of the scorers for the home team. Only select from the provided home team squad roster.",
            },
            predicted_scorers_away: {
              type: Type.ARRAY,
              items: { type: Type.INTEGER },
              description: "Array of jersey numbers of the scorers for the away team. Only select from the provided away team squad roster.",
            },
            analysis: {
              type: Type.STRING,
              description: "Detailed tactical match summary and breakdown (150-250 words) in markdown.",
            },
          },
          required: ['predicted_home_score', 'predicted_away_score', 'predicted_winner', 'predicted_scorers_home', 'predicted_scorers_away', 'analysis'],
        },
      },
    });

    const result = JSON.parse(response.text || '{}');
    res.json(result);
  } catch (error: any) {
    console.error('Error simulating match:', error);
    res.status(500).json({ error: error.message || 'Failed to simulate match' });
  }
});

// Bulk simulation endpoint to simulate multiple matches at once
app.post('/api/bulk-simulate', async (req: Request, res: Response) => {
  try {
    if (!ai) {
      return res.status(500).json({
        error: 'Gemini API key is not configured in Secrets. Please configure GEMINI_API_KEY.',
      });
    }

    const { matches } = req.body; // Array of { match_id, stage, home_team, away_team }

    if (!matches || !Array.isArray(matches)) {
      return res.status(400).json({ error: 'An array of matches is required' });
    }

    const matchesSummary = matches.map(m => {
      const t1Data = TEAMS[m.home_team] || { name: m.home_team };
      const t2Data = TEAMS[m.away_team] || { name: m.away_team };
      return `Match ${m.match_id} (${m.stage}): ${t1Data.name} (${m.home_team}) vs ${t2Data.name} (${m.away_team})`;
    }).join('\n');

    const prompt = `
      You are a highly advanced World Cup sports analytics prediction model trained on StatsBomb shot & pressure logs, Kaggle historical international match data (martj42), and FIFA 2026 player attributes (rauffauzanrambe). 
      You synthesize predictions by incorporating insights from 11 statistical tournament models (crowning favorites like ARG, FRA, BRA, and ENG, and factoring in their relative form, Elo, and xG efficiency).
      
      Predict the outcome of these 16 knockout matches:
      
      ${matchesSummary}

      For each match:
      1. Predict the regulation-time score for the home and away team (integers) aligned with historic team ratings and StatsBomb goal probability distributions.
      2. Predict the predicted winner: either the 3-letter country code of the winning team or "Draw" if regulation score is equal.
      3. Predict the goal scorers' jersey numbers for each team, selecting strictly from their standard rosters (e.g. ARG: Messi 10, Lautaro 22, Alvarez 9; BRA: Vinicius 7, Rodrygo 10, Raphinha 11; FRA: Mbappe 10, Griezmann 7; GER: Musiala 10, Wirtz 17, Havertz 7; ENG: Kane 9, Bellingham 10, Saka 7; ESP: Yamal 19, Morata 7, Williams 17; POR: Ronaldo 7, Bruno 8; COL: Diaz 7, Rodriguez 10, Duran 19; MAR: Hakimi 2, En-Nesyri 19, Ziyech 7).
         If a team scores 0 goals, return an empty array.

      Return the array of predictions matching the specified schema.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              match_id: { type: Type.STRING },
              predicted_home_score: { type: Type.INTEGER },
              predicted_away_score: { type: Type.INTEGER },
              predicted_winner: { type: Type.STRING },
              predicted_scorers_home: {
                type: Type.ARRAY,
                items: { type: Type.INTEGER }
              },
              predicted_scorers_away: {
                type: Type.ARRAY,
                items: { type: Type.INTEGER }
              }
            },
            required: ['match_id', 'predicted_home_score', 'predicted_away_score', 'predicted_winner', 'predicted_scorers_home', 'predicted_scorers_away']
          }
        }
      }
    });

    const results = JSON.parse(response.text || '[]');
    res.json(results);
  } catch (error: any) {
    console.error('Error in bulk simulation:', error);
    res.status(500).json({ error: error.message || 'Failed to simulate matches' });
  }
});

// Server-Side Reinforcement Learning training endpoint
app.post('/api/rl-train', async (req: Request, res: Response) => {
  try {
    const { learningRate = 0.15, epochs = 100, maskRatio = 0.15, tacticalBias = 'balanced', goalFocus = 'margin', cutoffDate, overfitOracle, initialRatings } = req.body;

    const { matches, source } = await fetchHistoricalMatches();

    const result = trainRLModel(matches, {
      learningRate: Number(learningRate),
      epochs: Number(epochs),
      maskRatio: Number(maskRatio),
      tacticalBias,
      goalFocus,
      cutoffDate,
      overfitOracle,
      initialRatings
    });

    res.json({
      success: true,
      source,
      logs: result.logs,
      history: result.history,
      ratings: result.ratings
    });
  } catch (error: any) {
    console.error('Error in RL training server:', error);
    res.status(500).json({ error: error.message || 'Failed to execute RL training' });
  }
});

app.get('/api/rl-goalscorers', async (req: Request, res: Response) => {
  try {
    const scorers = await fetchHistoricalGoalscorers();
    res.json({ success: true, scorers });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch goalscorers' });
  }
});

app.get('/api/rl-matches', async (req: Request, res: Response) => {
  try {
    const year = req.query.year as string;
    const { matches } = await fetchHistoricalMatches();
    
    // Filter for FIFA World Cup matches of the specified year
    const tournamentMatches = matches.filter(m => 
      m.tournament === 'FIFA World Cup' && m.date.startsWith(year)
    );
    
    res.json({ success: true, matches: tournamentMatches });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch matches' });
  }
});

// Setup Vite Dev Server / Static Hosting
const startServer = async () => {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
