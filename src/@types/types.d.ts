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
