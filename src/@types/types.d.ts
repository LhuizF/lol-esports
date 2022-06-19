interface Schedule {
  events: EventGame[];
}

interface EventGame {
  id: string;
  startTime: string;
  state: State;
  type: string;
  blockName?: string;
  league: League;
  tournament: { id: string };
  match?: Match;
  streams: Stream[];
}

type State = 'inProgress' | 'completed' | 'unstarted';

interface League {
  id: string;
  slug: string;
  name: string;
  image: string;
  priority: number;
  displayPriority: { position: number; status: string };
}

interface Streams {
  parameter: string;
  locale: string;
  mediaLocale: {
    locale: string;
    englishName: string;
    translatedName: string;
  };
  provider: string;
  countries: string[];
  offset: number;
  statsStatus: string;
}

interface Match {
  id: string;
  teams: Team[];
  strategy: { type: string; count: number };
  games: Game[];
}

interface Team {
  id: string;
  name: string;
  slug: string;
  code: string;
  image: string;
  result: {
    outcome: any; // null
    gameWins: number;
  };
  record: {
    wins: number;
    losses: number;
  };
}

interface Game {
  number: number;
  id: string;
  state: State;
  teams: { id: string; side: 'blue' | 'red' }[];
  vods: Array;
}

interface WindowGame {
  esportsGameId: string;
  esportsMatchId: string;
  gameMetadata: GameMetadata;
  frames: Frame[];
}

interface GameMetadata {
  patchVersion: string;
  blueTeamMetadata: TeamMetadata;
  redTeamMetadata: TeamMetadata;
}

interface TeamMetadata {
  esportsTeamId: string;
  participantMetadata: ParticipantMetadata[];
}

type Roles = 'top' | 'jungle' | 'mid' | 'bot' | 'support';

interface ParticipantMetadata {
  participantId: number;
  esportsPlayerId: string;
  summonerName: string;
  championId: string;
  role: Roles;
}

type GameState = 'in_game' | 'finished';

interface Frame {
  rfc460Timestamp: string;
  gameState: GameState;
  blueTeam: TeamFrame;
  redTeam: TeamFrame;
}
type Dragons = 'cloud' | 'hextech' | 'infernal' | 'mountain' | 'ocean';

interface TeamFrame {
  totalGold: number;
  inhibitors: number;
  towers: number;
  barons: number;
  totalKills: number;
  dragons: Dragons[] | [];
  participants: ParticipantFrame[];
}

interface ParticipantFrame {
  participantId: number;
  totalGold: number;
  level: number;
  kills: number;
  deaths: number;
  assists: number;
  creepScore: number;
  currentHealth: number;
  maxHealth: number;
}
