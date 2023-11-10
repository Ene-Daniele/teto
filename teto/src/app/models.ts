export type Root = Root2[]

export interface Root2 {
  success: boolean
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
