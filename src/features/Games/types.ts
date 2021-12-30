export interface TMatch {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: number;
  lobby_type: number;
  hero_id: number;
  start_time: number;
  version: number;
  kills: number;
  deaths: number;
  assists: number;
  skill: number;
  leaver_status: number;
  party_size: number;
}

export interface TMatchFilters {
  limit?: number;
  offset?: number;
  win?: number;
  patch?: number;
  game_mode?: number;
  date?: number;
  lane_role?: number;
  hero_id?: number;
  is_radiant?: number;
  included_account_id?: number;
  excluded_account_id?: number;
  with_hero_id?: number;
  against_hero_id?: number;
  having?: number;
}
