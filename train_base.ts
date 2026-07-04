import fs from 'fs';
import path from 'path';
import { fetchHistoricalMatches, trainRLModel } from './server_rl_engine';

async function run() {
  console.log('Fetching historic matches...');
  const { matches } = await fetchHistoricalMatches();
  
  console.log('Running large-scale training (simulating deep training)...');
  const result = trainRLModel(matches, {
    learningRate: 0.05,
    epochs: 50000,
    maskRatio: 0.05,
    tacticalBias: 'balanced',
    goalFocus: 'margin'
  });
  
  const outputPath = path.join(process.cwd(), 'src/base_trained_ratings.json');
  fs.writeFileSync(outputPath, JSON.stringify(result.ratings, null, 2));
  console.log('Saved highly trained base ratings to ' + outputPath);
}

run();
