export interface Player {
  name: string;
  jersey: number;
  position: 'GK' | 'DF' | 'MF' | 'FW';
}

export interface TeamData {
  code: string;
  name: string;
  flag: string;
  rating: number;
  attack: number;
  midfield: number;
  defense: number;
  color: string;
  roster: Player[];
}

export interface MatchPrediction {
  match_id: string; // e.g. "R16_001", "QF_001"
  stage: string; // "Round of 16", "Quarter Final", "Semi Final", "Third Place Play-off", "Final"
  home_team: string; // FIFA 3-letter code
  away_team: string; // FIFA 3-letter code
  predicted_home_score: number;
  predicted_away_score: number;
  predicted_scorers_home: string; // e.g. "10, 7" or ""
  predicted_scorers_away: string; // e.g. "9" or ""
  predicted_winner: string; // 3-letter code (e.g. "GER") or "Draw"
}

export interface SimulationResult {
  predicted_home_score: number;
  predicted_away_score: number;
  predicted_scorers_home: number[];
  predicted_scorers_away: number[];
  predicted_winner: string;
  analysis: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  accuracy: number; // percentage
  points: number;
  exactScores: number;
  correctResults: number;
  isUser?: boolean;
}
