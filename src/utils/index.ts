import { AppDispatch } from '_app/core/redux';
import { playersArr } from '_app/constatnts';
import { getMatches } from '_app/features/Games/gamesSlice';
import { TMatch } from '_app/features/Games/types';

export async function loadPlayersMatches(dispatch: AppDispatch) {
  playersArr.forEach(([name, id]) => {
    dispatch(
      getMatches({
        id,
        name,
        filters: {},
      }),
    );
  });
}

export function isPlayerWon(game: TMatch) {
  if (game['radiant_win'] && game['player_slot'] < 6) return true;
  if (!game['radiant_win'] && game['player_slot'] > 6) return true;
  return false;
}
