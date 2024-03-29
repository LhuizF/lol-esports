interface LiveType {
  data: {
    schedule: Schedule;
  };
}

interface EventType {
  data: { event: EventGame };
}

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
  match: Match;
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
    outcome?: any; // null
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

interface TeamsGameMetadata extends GameMetadata {
  blueTeamName: string;
  redTeamName: string;
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

type GameState = 'in_game' | 'finished' | 'paused';

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

interface Player extends DetailsParticipant, ParticipantMetadata {
  goldGap: number;
}

type Abilities = 'Q' | 'W' | 'E' | 'R';

interface DetailsGame {
  frames: FramesDetails[];
}

interface FramesDetails {
  rfc460Timestamp: string;
  participants: DetailsParticipant[];
}

interface DetailsParticipant extends ParticipantFrame {
  totalGoldEarned: number;
  killParticipation: number;
  championDamageShare: number;
  wardsPlaced: number;
  wardsDestroyed: number;
  attackDamage: number;
  abilityPower: number;
  criticalChance: number;
  attackSpeed: number;
  lifeSteal: number;
  armor: number;
  magicResistance: number;
  tenacity: number;
  items: number[];
  perkMetadata: {
    styleId: number;
    subStyleId: number;
    perks: number[];
  };
  abilities: Abilities[];
}

interface PlayerItem {
  id?: number;
  colloq: string;
  depth: number;
  description: string;
  effect?: {
    Effect1Amount: string;
    Effect2Amount: string;
    Effect3Amount: string;
    Effect4Amount: string;
  };
  from: string[];
  gold: { base: 50; purchasable: true; total: 2800; sell: 1120 };
  image: {
    full: string;
    group: string;
    sprite: string;
    h: number;
    w: number;
    x: number;
    y: number;
  };
  maps: { [key: number]: boolean };
  name: string;
  plaintext: string;
  stats: { FlatPhysicalDamageMod: number; FlatArmorMod: number };
  tags: string[];
  stacks?: number;
  consumed?: boolean;
  stacksCurrent?: number;
}

interface Ddragon {
  items: ItemsDdragon;
  runes: RunesDdragon[];
}

interface PlayerRunes {
  runes: {
    icon: string;
    name: string;
    id: number;
    key: string;
    longDesc: string;
    shortDesc: string;
  };
  subRunes: {
    icon: string;
    name: string;
    id: number;
    key: string;
    slots: RunesSlots[];
  };
}

interface ItemsDdragon {
  [key: number]: PlayerItem;
}

interface Runes {
  icon: string;
  id: number;
  key: string;
  name: string;
}

interface RunesDdragon extends Runes {
  slots: RunesSlots[];
}

interface RunesSlots {
  runes: RunesDesc[];
}

interface RunesDesc extends Runes {
  longDesc: string;
  shortDesc: string;
}
