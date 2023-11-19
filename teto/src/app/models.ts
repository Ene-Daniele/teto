export type Root = Root2[]

export interface Root2 {
  success: boolean
  error: string
  data: Data
  cache: Cache
}

export interface Data {
  user: User
}

export interface User {
  _id: string
  username: string
  role: string
  ts: string
  badges: Badge[]
  xp: number
  gamesplayed: number
  gameswon: number
  gametime: number
  country: string
  supporter_tier: number
  verified: boolean
  league: League
  avatar_revision: number
  banner_revision: number
  bio: string
  connections: Connections
  friend_count: number
}

export interface Badge {
  id: string
  label: string
  ts: string
}

export interface League {
  gamesplayed: number
  gameswon: number
  rating: number
  glicko: number
  rd: number
  rank: string
  bestrank: string
  apm: number
  pps: number
  vs: number
  decaying: boolean
  standing: number
  percentile: number
  standing_local: number
  prev_rank: string
  prev_at: number
  next_rank: string
  next_at: number
  percentile_rank: string
}

export interface Connections {
  discord: Discord
}

export interface Discord {
  id: string
  username: string
}

export interface Cache {
  status: string
  cached_at: number
  cached_until: number
}

export interface RootBeer {
  success: boolean
  data: Data
  cache: Cache
}

export interface Data {
  records: Records
  zen: Zen
}

export interface Records {
  "40l": N40l
  blitz: Blitz
}

export interface N40l {
  record: Record
  rank: any
}

export interface Record {
  _id: string
  endcontext: Endcontext
  ismulti: boolean
  replayid: string
  stream: string
  ts: string
  user: User
}

export interface Endcontext {
  seed: number
  lines: number
  level_lines: number
  level_lines_needed: number
  inputs: number
  holds: number
  time: Time
  score: number
  zenlevel: number
  zenprogress: number
  level: number
  combo: number
  currentcombopower: number
  topcombo: number
  btb: number
  topbtb: number
  currentbtbchainpower: number
  tspins: number
  piecesplaced: number
  clears: Clears
  garbage: Garbage
  kills: number
  finesse: Finesse
  finalTime: number
  gametype: string
}

export interface Time {
  start: number
  zero: boolean
  locked: boolean
  prev: number
  frameoffset: number
}

export interface Clears {
  singles: number
  doubles: number
  triples: number
  quads: number
  realtspins: number
  minitspins: number
  minitspinsingles: number
  tspinsingles: number
  minitspindoubles: number
  tspindoubles: number
  tspintriples: number
  tspinquads: number
  allclear: number
}

export interface Garbage {
  sent: number
  received: number
  attack: number
  cleared: number
}

export interface Finesse {
  combo: number
  faults: number
  perfectpieces: number
}

export interface User {
  _id: string
  username: string
}

export interface Blitz {
  record: Record2
  rank: any
}

export interface Record2 {
  _id: string
  stream: string
  replayid: string
  user: User2
  ts: string
  endcontext: Endcontext2
  ismulti: boolean
}

export interface User2 {
  _id: string
  username: string
}

export interface Endcontext2 {
  seed: number
  lines: number
  level_lines: number
  level_lines_needed: number
  inputs: number
  holds: number
  time: Time2
  score: number
  zenlevel: number
  zenprogress: number
  level: number
  combo: number
  currentcombopower: number
  topcombo: number
  btb: number
  topbtb: number
  tspins: number
  piecesplaced: number
  clears: Clears2
  garbage: Garbage2
  kills: number
  finesse: Finesse2
  finalTime: number
  gametype: string
}

export interface Time2 {
  start: number
  zero: boolean
  locked: boolean
  prev: number
  frameoffset: number
}

export interface Clears2 {
  singles: number
  doubles: number
  triples: number
  quads: number
  realtspins: number
  minitspins: number
  minitspinsingles: number
  tspinsingles: number
  minitspindoubles: number
  tspindoubles: number
  tspintriples: number
  tspinquads: number
  allclear: number
}

export interface Garbage2 {
  sent: number
  received: number
  attack: number
  cleared: number
}

export interface Finesse2 {
  combo: number
  faults: number
  perfectpieces: number
}

export interface Zen {
  level: number
  score: number
}

export interface Cache {
  status: string
  cached_at: number
  cached_until: number
}
