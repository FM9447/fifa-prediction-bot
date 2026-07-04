export interface Player {
  name: string;
  jersey: number;
  position: 'GK' | 'DF' | 'MF' | 'FW';
}

export interface TeamData {
  code: string; // 3-letter FIFA code
  name: string;
  flag: string;
  rating: number; // 0-100 scale
  attack: number;
  midfield: number;
  defense: number;
  color: string; // Tailwind color class
  roster: Player[];
}

export const TEAMS: Record<string, TeamData> = {
  PAR: {
    id: 'par',
    name: 'Paraguay',
    code: 'PAR',
    flag: '🇵🇾',
    color: 'red-600',
    attack: 75,
    defense: 78,
    key_players: [{ id: 'p_10', name: 'M. Almirón', number: 10, position: 'AM', skill: 82 }]
  },
  NOR: {
    id: 'nor',
    name: 'Norway',
    code: 'NOR',
    flag: '🇳🇴',
    color: 'red-700',
    attack: 85,
    defense: 76,
    key_players: [{ id: 'n_9', name: 'E. Haaland', number: 9, position: 'ST', skill: 94 }]
  },
  EGY: {
    id: 'egy',
    name: 'Egypt',
    code: 'EGY',
    flag: '🇪🇬',
    color: 'red-600',
    attack: 82,
    defense: 75,
    key_players: [{ id: 'e_10', name: 'M. Salah', number: 10, position: 'RW', skill: 89 }]
  },
  SUI: {
    id: 'sui',
    name: 'Switzerland',
    code: 'SUI',
    flag: '🇨🇭',
    color: 'red-600',
    attack: 79,
    defense: 81,
    key_players: [{ id: 's_10', name: 'G. Xhaka', number: 10, position: 'CM', skill: 84 }]
  },

  ARG: {
    code: 'ARG',
    name: 'Argentina',
    flag: '🇦🇷',
    rating: 92,
    attack: 94,
    midfield: 91,
    defense: 90,
    color: 'sky',
    roster: [
      { name: 'Lionel Messi', jersey: 10, position: 'FW' },
      { name: 'Julián Álvarez', jersey: 9, position: 'FW' },
      { name: 'Lautaro Martínez', jersey: 22, position: 'FW' },
      { name: 'Alexis Mac Allister', jersey: 20, position: 'MF' },
      { name: 'Enzo Fernández', jersey: 24, position: 'MF' },
      { name: 'Rodrigo De Paul', jersey: 7, position: 'MF' },
      { name: 'Leandro Paredes', jersey: 5, position: 'MF' },
      { name: 'Alejandro Garnacho', jersey: 17, position: 'FW' },
      { name: 'Cristian Romero', jersey: 13, position: 'DF' },
      { name: 'Nicolás Otamendi', jersey: 19, position: 'DF' },
      { name: 'Lisandro Martínez', jersey: 25, position: 'DF' },
      { name: 'Emiliano Martínez', jersey: 23, position: 'GK' }
    ]
  },
  BRA: {
    code: 'BRA',
    name: 'Brazil',
    flag: '🇧🇷',
    rating: 91,
    attack: 93,
    midfield: 89,
    defense: 90,
    color: 'yellow',
    roster: [
      { name: 'Vinícius Júnior', jersey: 7, position: 'FW' },
      { name: 'Rodrygo', jersey: 10, position: 'FW' },
      { name: 'Raphinha', jersey: 11, position: 'FW' },
      { name: 'Endrick', jersey: 9, position: 'FW' },
      { name: 'Gabriel Martinelli', jersey: 22, position: 'FW' },
      { name: 'Lucas Paquetá', jersey: 8, position: 'MF' },
      { name: 'Bruno Guimarães', jersey: 5, position: 'MF' },
      { name: 'Douglas Luiz', jersey: 18, position: 'MF' },
      { name: 'Marquinhos', jersey: 4, position: 'DF' },
      { name: 'Gabriel Magalhães', jersey: 14, position: 'DF' },
      { name: 'Éder Militão', jersey: 3, position: 'DF' },
      { name: 'Alisson Becker', jersey: 1, position: 'GK' }
    ]
  },
  FRA: {
    code: 'FRA',
    name: 'France',
    flag: '🇫🇷',
    rating: 93,
    attack: 95,
    midfield: 91,
    defense: 92,
    color: 'blue',
    roster: [
      { name: 'Kylian Mbappé', jersey: 10, position: 'FW' },
      { name: 'Antoine Griezmann', jersey: 7, position: 'MF' },
      { name: 'Ousmane Dembélé', jersey: 11, position: 'FW' },
      { name: 'Marcus Thuram', jersey: 15, position: 'FW' },
      { name: 'Bradley Barcola', jersey: 25, position: 'FW' },
      { name: 'Aurélien Tchouaméni', jersey: 8, position: 'MF' },
      { name: 'Eduardo Camavinga', jersey: 6, position: 'MF' },
      { name: 'Warren Zaïre-Emery', jersey: 18, position: 'MF' },
      { name: 'William Saliba', jersey: 4, position: 'DF' },
      { name: 'Dayot Upamecano', jersey: 13, position: 'DF' },
      { name: 'Theo Hernández', jersey: 22, position: 'DF' },
      { name: 'Mike Maignan', jersey: 16, position: 'GK' }
    ]
  },
  GER: {
    code: 'GER',
    name: 'Germany',
    flag: '🇩🇪',
    rating: 90,
    attack: 89,
    midfield: 92,
    defense: 88,
    color: 'gray',
    roster: [
      { name: 'Kai Havertz', jersey: 7, position: 'FW' },
      { name: 'Jamal Musiala', jersey: 10, position: 'MF' },
      { name: 'Florian Wirtz', jersey: 17, position: 'MF' },
      { name: 'Niclas Füllkrug', jersey: 9, position: 'FW' },
      { name: 'Leroy Sané', jersey: 19, position: 'FW' },
      { name: 'Serge Gnabry', jersey: 11, position: 'FW' },
      { name: 'Robert Andrich', jersey: 23, position: 'MF' },
      { name: 'Pascal Groß', jersey: 5, position: 'MF' },
      { name: 'Antonio Rüdiger', jersey: 2, position: 'DF' },
      { name: 'Jonathan Tah', jersey: 4, position: 'DF' },
      { name: 'Joshua Kimmich', jersey: 6, position: 'DF' },
      { name: 'Marc-André ter Stegen', jersey: 1, position: 'GK' }
    ]
  },
  ESP: {
    code: 'ESP',
    name: 'Spain',
    flag: '🇪🇸',
    rating: 92,
    attack: 90,
    midfield: 94,
    defense: 91,
    color: 'red',
    roster: [
      { name: 'Álvaro Morata', jersey: 7, position: 'FW' },
      { name: 'Lamine Yamal', jersey: 19, position: 'FW' },
      { name: 'Nico Williams', jersey: 17, position: 'FW' },
      { name: 'Dani Olmo', jersey: 10, position: 'MF' },
      { name: 'Pedri', jersey: 20, position: 'MF' },
      { name: 'Fabián Ruiz', jersey: 8, position: 'MF' },
      { name: 'Rodri', jersey: 16, position: 'MF' },
      { name: 'Mikel Oyarzabal', jersey: 21, position: 'FW' },
      { name: 'Robin Le Normand', jersey: 3, position: 'DF' },
      { name: 'Aymeric Laporte', jersey: 14, position: 'DF' },
      { name: 'Dani Carvajal', jersey: 2, position: 'DF' },
      { name: 'Unai Simón', jersey: 23, position: 'GK' }
    ]
  },
  ENG: {
    code: 'ENG',
    name: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    rating: 92,
    attack: 93,
    midfield: 92,
    defense: 89,
    color: 'indigo',
    roster: [
      { name: 'Harry Kane', jersey: 9, position: 'FW' },
      { name: 'Jude Bellingham', jersey: 10, position: 'MF' },
      { name: 'Bukayo Saka', jersey: 7, position: 'FW' },
      { name: 'Phil Foden', jersey: 11, position: 'FW' },
      { name: 'Cole Palmer', jersey: 24, position: 'MF' },
      { name: 'Ollie Watkins', jersey: 19, position: 'FW' },
      { name: 'Declan Rice', jersey: 4, position: 'MF' },
      { name: 'Kobbie Mainoo', jersey: 26, position: 'MF' },
      { name: 'John Stones', jersey: 5, position: 'DF' },
      { name: 'Marc Guéhi', jersey: 6, position: 'DF' },
      { name: 'Kyle Walker', jersey: 2, position: 'DF' },
      { name: 'Jordan Pickford', jersey: 1, position: 'GK' }
    ]
  },
  POR: {
    code: 'POR',
    name: 'Portugal',
    flag: '🇵🇹',
    rating: 89,
    attack: 91,
    midfield: 90,
    defense: 87,
    color: 'emerald',
    roster: [
      { name: 'Cristiano Ronaldo', jersey: 7, position: 'FW' },
      { name: 'Rafael Leão', jersey: 17, position: 'FW' },
      { name: 'Bernardo Silva', jersey: 10, position: 'MF' },
      { name: 'Bruno Fernandes', jersey: 8, position: 'MF' },
      { name: 'João Félix', jersey: 11, position: 'FW' },
      { name: 'Gonçalo Ramos', jersey: 9, position: 'FW' },
      { name: 'Diogo Jota', jersey: 21, position: 'FW' },
      { name: 'Vitinha', jersey: 23, position: 'MF' },
      { name: 'Rúben Dias', jersey: 4, position: 'DF' },
      { name: 'Pepe', jersey: 3, position: 'DF' },
      { name: 'João Cancelo', jersey: 20, position: 'DF' },
      { name: 'Diogo Costa', jersey: 22, position: 'GK' }
    ]
  },
  COL: {
    code: 'COL',
    name: 'Colombia',
    flag: '🇨🇴',
    rating: 87,
    attack: 88,
    midfield: 86,
    defense: 85,
    color: 'yellow',
    roster: [
      { name: 'Luis Díaz', jersey: 7, position: 'FW' },
      { name: 'James Rodríguez', jersey: 10, position: 'MF' },
      { name: 'Jhon Durán', jersey: 19, position: 'FW' },
      { name: 'Jhon Arias', jersey: 11, position: 'MF' },
      { name: 'Richard Ríos', jersey: 6, position: 'MF' },
      { name: 'Jefferson Lerma', jersey: 16, position: 'MF' },
      { name: 'Davinson Sánchez', jersey: 23, position: 'DF' },
      { name: 'Daniel Muñoz', jersey: 21, position: 'DF' },
      { name: 'Johan Mojica', jersey: 17, position: 'DF' },
      { name: 'Carlos Cuesta', jersey: 2, position: 'DF' },
      { name: 'Camilo Vargas', jersey: 12, position: 'GK' }
    ]
  },
  ITA: {
    code: 'ITA',
    name: 'Italy',
    flag: '🇮🇹',
    rating: 87,
    attack: 84,
    midfield: 88,
    defense: 89,
    color: 'blue',
    roster: [
      { name: 'Mateo Retegui', jersey: 19, position: 'FW' },
      { name: 'Federico Chiesa', jersey: 14, position: 'FW' },
      { name: 'Gianluca Scamacca', jersey: 9, position: 'FW' },
      { name: 'Nicolò Barella', jersey: 18, position: 'MF' },
      { name: 'Lorenzo Pellegrini', jersey: 10, position: 'MF' },
      { name: 'Davide Frattesi', jersey: 7, position: 'MF' },
      { name: 'Jorginho', jersey: 8, position: 'MF' },
      { name: 'Alessandro Bastoni', jersey: 23, position: 'DF' },
      { name: 'Riccardo Calafiori', jersey: 5, position: 'DF' },
      { name: 'Giovanni Di Lorenzo', jersey: 2, position: 'DF' },
      { name: 'Federico Dimarco', jersey: 3, position: 'DF' },
      { name: 'Gianluigi Donnarumma', jersey: 1, position: 'GK' }
    ]
  },
  USA: {
    code: 'USA',
    name: 'United States',
    flag: '🇺🇸',
    rating: 84,
    attack: 85,
    midfield: 83,
    defense: 82,
    color: 'red',
    roster: [
      { name: 'Christian Pulisic', jersey: 10, position: 'FW' },
      { name: 'Folarin Balogun', jersey: 20, position: 'FW' },
      { name: 'Timothy Weah', jersey: 21, position: 'FW' },
      { name: 'Ricardo Pepi', jersey: 9, position: 'FW' },
      { name: 'Gio Reyna', jersey: 7, position: 'MF' },
      { name: 'Weston McKennie', jersey: 8, position: 'MF' },
      { name: 'Yunus Musah', jersey: 6, position: 'MF' },
      { name: 'Tyler Adams', jersey: 4, position: 'MF' },
      { name: 'Antonee Robinson', jersey: 3, position: 'DF' },
      { name: 'Tim Ream', jersey: 13, position: 'DF' },
      { name: 'Chris Richards', jersey: 4, position: 'DF' },
      { name: 'Matt Turner', jersey: 1, position: 'GK' }
    ]
  },
  MEX: {
    code: 'MEX',
    name: 'Mexico',
    flag: '🇲🇽',
    rating: 81,
    attack: 80,
    midfield: 82,
    defense: 81,
    color: 'green',
    roster: [
      { name: 'Santiago Giménez', jersey: 11, position: 'FW' },
      { name: 'Henry Martín', jersey: 20, position: 'FW' },
      { name: 'Uriel Antuna', jersey: 15, position: 'FW' },
      { name: 'Luis Chávez', jersey: 24, position: 'MF' },
      { name: 'Edson Álvarez', jersey: 4, position: 'MF' },
      { name: 'Orbelín Pineda', jersey: 17, position: 'MF' },
      { name: 'Erick Sánchez', jersey: 14, position: 'MF' },
      { name: 'César Montes', jersey: 3, position: 'DF' },
      { name: 'Johan Vásquez', jersey: 5, position: 'DF' },
      { name: 'Jorge Sánchez', jersey: 19, position: 'DF' },
      { name: 'Gerardo Arteaga', jersey: 6, position: 'DF' },
      { name: 'Luis Malagón', jersey: 1, position: 'GK' }
    ]
  },
  CAN: {
    code: 'CAN',
    name: 'Canada',
    flag: '🇨🇦',
    rating: 80,
    attack: 82,
    midfield: 78,
    defense: 79,
    color: 'red',
    roster: [
      { name: 'Jonathan David', jersey: 20, position: 'FW' },
      { name: 'Cyle Larin', jersey: 9, position: 'FW' },
      { name: 'Tajon Buchanan', jersey: 11, position: 'FW' },
      { name: 'Jacob Shaffelburg', jersey: 14, position: 'FW' },
      { name: 'Alphonso Davies', jersey: 19, position: 'DF' },
      { name: 'Stephen Eustáquio', jersey: 7, position: 'MF' },
      { name: 'Ismaël Koné', jersey: 8, position: 'MF' },
      { name: 'Jonathan Osorio', jersey: 21, position: 'MF' },
      { name: 'Alistair Johnston', jersey: 2, position: 'DF' },
      { name: 'Moïse Bombito', jersey: 15, position: 'DF' },
      { name: 'Derek Cornelius', jersey: 13, position: 'DF' },
      { name: 'Maxime Crépeau', jersey: 16, position: 'GK' }
    ]
  },
  URU: {
    code: 'URU',
    name: 'Uruguay',
    flag: '🇺🇾',
    rating: 88,
    attack: 89,
    midfield: 89,
    defense: 86,
    color: 'sky',
    roster: [
      { name: 'Darwin Núñez', jersey: 19, position: 'FW' },
      { name: 'Facundo Pellistri', jersey: 11, position: 'FW' },
      { name: 'Maximiliano Araújo', jersey: 20, position: 'FW' },
      { name: 'Federico Valverde', jersey: 15, position: 'MF' },
      { name: 'Rodrigo Bentancur', jersey: 6, position: 'MF' },
      { name: 'Manuel Ugarte', jersey: 5, position: 'MF' },
      { name: 'Nicolás de la Cruz', jersey: 7, position: 'MF' },
      { name: 'Ronald Araújo', jersey: 4, position: 'DF' },
      { name: 'José María Giménez', jersey: 2, position: 'DF' },
      { name: 'Mathías Olivera', jersey: 16, position: 'DF' },
      { name: 'Matías Viña', jersey: 17, position: 'DF' },
      { name: 'Sergio Rochet', jersey: 1, position: 'GK' }
    ]
  },
  BEL: {
    code: 'BEL',
    name: 'Belgium',
    flag: '🇧🇪',
    rating: 86,
    attack: 87,
    midfield: 88,
    defense: 83,
    color: 'red',
    roster: [
      { name: 'Romelu Lukaku', jersey: 10, position: 'FW' },
      { name: 'Jérémy Doku', jersey: 11, position: 'FW' },
      { name: 'Leandro Trossard', jersey: 9, position: 'FW' },
      { name: 'Kevin De Bruyne', jersey: 7, position: 'MF' },
      { name: 'Amadou Onana', jersey: 6, position: 'MF' },
      { name: 'Youri Tielemans', jersey: 8, position: 'MF' },
      { name: 'Charles De Ketelaere', jersey: 22, position: 'MF' },
      { name: 'Wout Faes', jersey: 4, position: 'DF' },
      { name: 'Timothy Castagne', jersey: 21, position: 'DF' },
      { name: 'Jan Vertonghen', jersey: 5, position: 'DF' },
      { name: 'Zeno Debast', jersey: 2, position: 'DF' },
      { name: 'Koen Casteels', jersey: 1, position: 'GK' }
    ]
  },
  CRO: {
    code: 'CRO',
    name: 'Croatia',
    flag: '🇭🇷',
    rating: 85,
    attack: 83,
    midfield: 89,
    defense: 84,
    color: 'red',
    roster: [
      { name: 'Andrej Kramarić', jersey: 9, position: 'FW' },
      { name: 'Ante Budimir', jersey: 16, position: 'FW' },
      { name: 'Ivan Perišić', jersey: 4, position: 'FW' },
      { name: 'Luka Modrić', jersey: 10, position: 'MF' },
      { name: 'Mateo Kovačić', jersey: 8, position: 'MF' },
      { name: 'Mario Pašalić', jersey: 15, position: 'MF' },
      { name: 'Marcelo Brozović', jersey: 11, position: 'MF' },
      { name: 'Joško Gvardiol', jersey: 4, position: 'DF' },
      { name: 'Josip Šutalo', jersey: 6, position: 'DF' },
      { name: 'Josip Stanišić', jersey: 2, position: 'DF' },
      { name: 'Domagoj Vida', jersey: 21, position: 'DF' },
      { name: 'Dominik Livaković', jersey: 1, position: 'GK' }
    ]
  },
  MAR: {
    code: 'MAR',
    name: 'Morocco',
    flag: '🇲🇦',
    rating: 86,
    attack: 85,
    midfield: 87,
    defense: 86,
    color: 'red',
    roster: [
      { name: 'Youssef En-Nesyri', jersey: 19, position: 'FW' },
      { name: 'Hakim Ziyech', jersey: 7, position: 'MF' },
      { name: 'Achraf Hakimi', jersey: 2, position: 'DF' },
      { name: 'Sofyan Amrabat', jersey: 4, position: 'MF' },
      { name: 'Azzedine Ounahi', jersey: 8, position: 'MF' },
      { name: 'Amine Adli', jersey: 21, position: 'FW' },
      { name: 'Brahim Díaz', jersey: 10, position: 'MF' },
      { name: 'Nayef Aguerd', jersey: 5, position: 'DF' },
      { name: 'Romain Saïss', jersey: 6, position: 'DF' },
      { name: 'Noussair Mazraoui', jersey: 3, position: 'DF' },
      { name: 'Yassine Bounou', jersey: 1, position: 'GK' }
    ]
  }
};

import type { MatchPrediction } from '../types';

export type { MatchPrediction };

export const STAGES = {
  R32: { label: 'Round of 32', multiplier: 1.0, matchesCount: 16 },
  R16: { label: 'Round of 16', multiplier: 1.5, matchesCount: 8 },
  QF: { label: 'Quarter Final', multiplier: 2.0, matchesCount: 4 },
  SF: { label: 'Semi Final', multiplier: 3.0, matchesCount: 2 },
  '3RD': { label: 'Third Place Play-off', multiplier: 2.5, matchesCount: 1 },
  FINAL: { label: 'Final', multiplier: 5.0, matchesCount: 1 }
};

export const INITIAL_MATCHES_SCENARIO: MatchPrediction[] = [
  // Round of 16 (8 matches)
  { match_id: 'R16_001', stage: 'Round of 16', home_team: 'PAR', away_team: 'FRA', predicted_home_score: 1, predicted_away_score: 3, predicted_scorers_home: '10', predicted_scorers_away: '10, 7', predicted_winner: 'FRA' },
  { match_id: 'R16_002', stage: 'Round of 16', home_team: 'CAN', away_team: 'MAR', predicted_home_score: 1, predicted_away_score: 2, predicted_scorers_home: '9', predicted_scorers_away: '19, 7', predicted_winner: 'MAR' },
  { match_id: 'R16_003', stage: 'Round of 16', home_team: 'POR', away_team: 'ESP', predicted_home_score: 1, predicted_away_score: 2, predicted_scorers_home: '7', predicted_scorers_away: '19, 10', predicted_winner: 'ESP' },
  { match_id: 'R16_004', stage: 'Round of 16', home_team: 'USA', away_team: 'BEL', predicted_home_score: 2, predicted_away_score: 1, predicted_scorers_home: '10, 9', predicted_scorers_away: '10', predicted_winner: 'USA' },
  { match_id: 'R16_005', stage: 'Round of 16', home_team: 'BRA', away_team: 'NOR', predicted_home_score: 3, predicted_away_score: 1, predicted_scorers_home: '10, 9, 7', predicted_scorers_away: '9', predicted_winner: 'BRA' },
  { match_id: 'R16_006', stage: 'Round of 16', home_team: 'MEX', away_team: 'ENG', predicted_home_score: 1, predicted_away_score: 2, predicted_scorers_home: '11', predicted_scorers_away: '9, 10', predicted_winner: 'ENG' },
  { match_id: 'R16_007', stage: 'Round of 16', home_team: 'ARG', away_team: 'EGY', predicted_home_score: 2, predicted_away_score: 0, predicted_scorers_home: '10, 22', predicted_scorers_away: '', predicted_winner: 'ARG' },
  { match_id: 'R16_008', stage: 'Round of 16', home_team: 'SUI', away_team: 'COL', predicted_home_score: 1, predicted_away_score: 2, predicted_scorers_home: '10', predicted_scorers_away: '7, 10', predicted_winner: 'COL' },

  // Quarter Finals (4 matches)
  { match_id: 'QF_001', stage: 'Quarter Final', home_team: 'FRA', away_team: 'MAR', predicted_home_score: 2, predicted_away_score: 0, predicted_scorers_home: '10, 7', predicted_scorers_away: '', predicted_winner: 'FRA' },
  { match_id: 'QF_002', stage: 'Quarter Final', home_team: 'ESP', away_team: 'USA', predicted_home_score: 2, predicted_away_score: 1, predicted_scorers_home: '19, 17', predicted_scorers_away: '10', predicted_winner: 'ESP' },
  { match_id: 'QF_003', stage: 'Quarter Final', home_team: 'BRA', away_team: 'ENG', predicted_home_score: 2, predicted_away_score: 2, predicted_scorers_home: '10, 7', predicted_scorers_away: '9, 10', predicted_winner: 'Draw' },
  { match_id: 'QF_004', stage: 'Quarter Final', home_team: 'ARG', away_team: 'COL', predicted_home_score: 3, predicted_away_score: 1, predicted_scorers_home: '10, 22, 9', predicted_scorers_away: '7', predicted_winner: 'ARG' },

  // Semi Finals (2 matches)
  { match_id: 'SF_001', stage: 'Semi Final', home_team: 'FRA', away_team: 'ESP', predicted_home_score: 1, predicted_away_score: 2, predicted_scorers_home: '10', predicted_scorers_away: '19, 10', predicted_winner: 'ESP' },
  { match_id: 'SF_002', stage: 'Semi Final', home_team: 'BRA', away_team: 'ARG', predicted_home_score: 1, predicted_away_score: 2, predicted_scorers_home: '7', predicted_scorers_away: '10, 22', predicted_winner: 'ARG' },

  // Third Place Playoff (1 match)
  { match_id: 'TP_001', stage: 'Third Place Play-off', home_team: 'FRA', away_team: 'BRA', predicted_home_score: 2, predicted_away_score: 1, predicted_scorers_home: '10, 7', predicted_scorers_away: '9', predicted_winner: 'FRA' },

  // Grand Final (1 match)
  { match_id: 'F_001', stage: 'Final', home_team: 'ESP', away_team: 'ARG', predicted_home_score: 1, predicted_away_score: 1, predicted_scorers_home: '19', predicted_scorers_away: '10', predicted_winner: 'Draw' }
];
