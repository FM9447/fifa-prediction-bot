export interface HistoricalGame {
  year: number;
  stage: string;
  home_team: string; // 3-letter code
  away_team: string; // 3-letter code
  home_name: string;
  away_name: string;
  home_flag: string;
  away_flag: string;
  home_score: number;
  away_score: number;
  winner: string; // 'home_team', 'away_team', or 'Draw'
  description: string;
}

export const HISTORICAL_GAMES: HistoricalGame[] = [
  // 2022 World Cup
  {
    year: 2022,
    stage: 'Final',
    home_team: 'ARG',
    away_team: 'FRA',
    home_name: 'Argentina',
    away_name: 'France',
    home_flag: '🇦🇷',
    away_flag: '🇫🇷',
    home_score: 3,
    away_score: 3, // 3-3 in regulation + ET
    winner: 'ARG', // Won on pens
    description: 'One of the greatest finals ever. Messi vs Mbappé thriller ending 3-3 (4-2 on pens).'
  },
  {
    year: 2022,
    stage: 'Semi Final',
    home_team: 'ARG',
    away_team: 'CRO',
    home_name: 'Argentina',
    away_name: 'Croatia',
    home_flag: '🇦🇷',
    away_flag: '🇭🇷',
    home_score: 3,
    away_score: 0,
    winner: 'ARG',
    description: 'Messi and Álvarez dominate Croatia to reach the final.'
  },
  {
    year: 2022,
    stage: 'Quarter Final',
    home_team: 'CRO',
    away_team: 'BRA',
    home_name: 'Croatia',
    away_name: 'Brazil',
    home_flag: '🇭🇷',
    away_flag: '🇧🇷',
    home_score: 1,
    away_score: 1,
    winner: 'CRO', // Won on pens
    description: 'Croatia stuns Brazil in extra time and advances on penalties.'
  },
  {
    year: 2022,
    stage: 'Round of 16',
    home_team: 'MAR',
    away_team: 'ESP',
    home_name: 'Morocco',
    away_name: 'Spain',
    home_flag: '🇲🇦',
    away_flag: '🇪🇸',
    home_score: 0,
    away_score: 0,
    winner: 'MAR', // Won on pens
    description: 'Morocco plays defensive masterclass, holding Spain to 0-0 and winning on pens.'
  },
  {
    year: 2022,
    stage: 'Group Stage',
    home_team: 'ARG',
    away_team: 'MEX',
    home_name: 'Argentina',
    away_name: 'Mexico',
    home_flag: '🇦🇷',
    away_flag: '🇲🇽',
    home_score: 2,
    away_score: 0,
    winner: 'ARG',
    description: 'Messi breaks the deadlock with a stellar long-range strike in a tense group clash.'
  },

  // 2018 World Cup
  {
    year: 2018,
    stage: 'Final',
    home_team: 'FRA',
    away_team: 'CRO',
    home_name: 'France',
    away_name: 'Croatia',
    home_flag: '🇫🇷',
    away_flag: '🇭🇷',
    home_score: 4,
    away_score: 2,
    winner: 'FRA',
    description: 'A high-scoring tactical final where France clinches their second title.'
  },
  {
    year: 2018,
    stage: 'Round of 16',
    home_team: 'FRA',
    away_team: 'ARG',
    home_name: 'France',
    away_name: 'Argentina',
    home_flag: '🇫🇷',
    away_flag: '🇦🇷',
    home_score: 4,
    away_score: 3,
    winner: 'FRA',
    description: 'Mbappé explodes on the world stage in a thrilling 7-goal match.'
  },
  {
    year: 2018,
    stage: 'Quarter Final',
    home_team: 'BRA',
    away_team: 'BEL',
    home_name: 'Brazil',
    away_name: 'Belgium',
    home_flag: '🇧🇷',
    away_flag: '🇧🇪',
    home_score: 1,
    away_score: 2,
    winner: 'BEL',
    description: 'Belgium Golden Generation outclasses Brazil tactical counter-attacks.'
  },

  // 2014 World Cup
  {
    year: 2014,
    stage: 'Semi Final',
    home_team: 'BRA',
    away_team: 'GER',
    home_name: 'Brazil',
    away_name: 'Germany',
    home_flag: '🇧🇷',
    away_flag: '🇩🇪',
    home_score: 1,
    away_score: 7,
    winner: 'GER',
    description: 'The "Mineirazo". Germany stuns hosts Brazil in a historic 7-1 rout.'
  },
  {
    year: 2014,
    stage: 'Final',
    home_team: 'GER',
    away_team: 'ARG',
    home_name: 'Germany',
    away_name: 'Argentina',
    home_flag: '🇩🇪',
    away_flag: '🇦🇷',
    home_score: 1,
    away_score: 0,
    winner: 'GER',
    description: 'Götze scores a beautiful volley in extra-time to deny Messi\'s Argentina.'
  },
  {
    year: 2014,
    stage: 'Quarter Final',
    home_team: 'COL',
    away_team: 'BRA',
    home_name: 'Colombia',
    away_name: 'Brazil',
    home_flag: '🇨🇴',
    away_flag: '🇧🇷',
    home_score: 1,
    away_score: 2,
    winner: 'BRA',
    description: 'A physical battle where Brazil squeezes through, but loses Neymar to injury.'
  },

  // 2010 World Cup
  {
    year: 2010,
    stage: 'Final',
    home_team: 'ESP',
    away_team: 'NED',
    home_name: 'Spain',
    away_name: 'Netherlands',
    home_flag: '🇪🇸',
    away_flag: '🇳🇱',
    home_score: 1,
    away_score: 0,
    winner: 'ESP',
    description: 'Iniesta scores in the 116th minute to crown Spain World Champions.'
  },
  {
    year: 2010,
    stage: 'Quarter Final',
    home_team: 'URU',
    away_team: 'GHA',
    home_name: 'Uruguay',
    away_name: 'Ghana',
    home_flag: '🇺🇾',
    away_flag: '🇬🇭',
    home_score: 1,
    away_score: 1,
    winner: 'URU',
    description: 'Suarez hand-ball drama leads to penalty drama where Uruguay advances.'
  },

  // 2006 World Cup
  {
    year: 2006,
    stage: 'Final',
    home_team: 'ITA',
    away_team: 'FRA',
    home_name: 'Italy',
    away_name: 'France',
    home_flag: '🇮🇹',
    away_flag: '🇫🇷',
    home_score: 1,
    away_score: 1,
    winner: 'ITA',
    description: 'Zidane\'s infamous headbutt and Italy wins on penalties (5-3).'
  },
  {
    year: 2006,
    stage: 'Quarter Final',
    home_team: 'ENG',
    away_team: 'POR',
    home_name: 'England',
    away_name: 'Portugal',
    home_flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    away_flag: '🇵🇹',
    home_score: 0,
    away_score: 0,
    winner: 'POR',
    description: 'Rooney red card drama and Ricardo penalty shootout saves.'
  },

  // Classic Retro Tournaments
  {
    year: 2002,
    stage: 'Final',
    home_team: 'GER',
    away_team: 'BRA',
    home_name: 'Germany',
    away_name: 'Brazil',
    home_flag: '🇩🇪',
    away_flag: '🇧🇷',
    home_score: 0,
    away_score: 2,
    winner: 'BRA',
    description: 'Ronaldo Nazário scores twice to claim Brazil\'s 5th star.'
  },
  {
    year: 1998,
    stage: 'Final',
    home_team: 'FRA',
    away_team: 'BRA',
    home_name: 'France',
    away_name: 'Brazil',
    home_flag: '🇫🇷',
    away_flag: '🇧🇷',
    home_score: 3,
    away_score: 0,
    winner: 'FRA',
    description: 'Zidane scores two historic headers as France beats Brazil on home soil.'
  },
  {
    year: 1994,
    stage: 'Final',
    home_team: 'BRA',
    away_team: 'ITA',
    home_name: 'Brazil',
    away_name: 'Italy',
    home_flag: '🇧🇷',
    away_flag: '🇮🇹',
    home_score: 0,
    away_score: 0,
    winner: 'BRA',
    description: 'Roberto Baggio misses the final penalty and Brazil crowns champion.'
  },
  {
    year: 1990,
    stage: 'Final',
    home_team: 'GER',
    away_team: 'ARG',
    home_name: 'Germany',
    away_name: 'Argentina',
    home_flag: '🇩🇪',
    away_flag: '🇦🇷',
    home_score: 1,
    away_score: 0,
    winner: 'GER',
    description: 'Brehme scores a late controversial penalty in a physical final.'
  },
  {
    year: 1986,
    stage: 'Quarter Final',
    home_team: 'ARG',
    away_team: 'ENG',
    home_name: 'Argentina',
    away_name: 'England',
    home_flag: '🇦🇷',
    away_flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home_score: 2,
    away_score: 1,
    winner: 'ARG',
    description: 'Maradona scores the "Hand of God" and the "Goal of the Century".'
  },
  {
    year: 1986,
    stage: 'Final',
    home_team: 'ARG',
    away_team: 'GER',
    home_name: 'Argentina',
    away_name: 'Germany',
    home_flag: '🇦🇷',
    away_flag: '🇩🇪',
    home_score: 3,
    away_score: 2,
    winner: 'ARG',
    description: 'A 5-goal thriller where Burruchaga seals the title for Argentina.'
  },
  {
    year: 1970,
    stage: 'Final',
    home_team: 'BRA',
    away_team: 'ITA',
    home_name: 'Brazil',
    away_name: 'Italy',
    home_flag: '🇧🇷',
    away_flag: '🇮🇹',
    home_score: 4,
    away_score: 1,
    winner: 'BRA',
    description: 'Pele\'s masterclass and Carlos Alberto\'s legendary team-play goal.'
  }
];
