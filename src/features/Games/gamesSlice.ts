// import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
// import { RootState } from '_app/core/redux';
// import { TMatch, TMatchFilters } from '_app/features/Games/types';
// import { toPairs } from 'lodash';
//
// const gamesAdapter = createEntityAdapter<TMatch>({ selectId: (match) => match.match_id });
//
// export const getMatches = createAsyncThunk(
//   'games/getMatches',
//   async ({ id, filters }: { id: number; filters: TMatchFilters }, { rejectWithValue }) => {
//     try {
//       const filterStr = toPairs(filters)
//         .map(([key, val]) => `${key}=${val}`)
//         .join('&');
//       const res = await fetch(`https://api.opendota.com/api/players/${id}/matches?${filterStr}`);
//       return await res.json();
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   },
// );
//
// const gamesSlice = createSlice({
//   name: 'games',
//   initialState: gamesAdapter.getInitialState(),
//   reducers: {
//     addGames: gamesAdapter.addOne,
//     setGames: gamesAdapter.setAll,
//     updateGames: gamesAdapter.updateOne,
//   },
//   extraReducers: (x) => {
//     x.addCase(getMatches.fulfilled, gamesAdapter.addMany);
//   },
// });
//
// const gamesSelectors = gamesAdapter.getSelectors<RootState>((state) => state.games);
//
// const selectAllGames = createSelector(
//   (state: RootState) => gamesSelectors.selectAll(state),
//   (games) => games,
// );
//
// const selectGamesById = (id: string) =>
//   createSelector(
//     (state: RootState) => gamesSelectors.selectById(state, id),
//     (games) => games,
//   );
//
// export { gamesSelectors, selectAllGames, selectGamesById };
// export const { addGames, setGames, updateGames } = gamesSlice.actions;
// export default gamesSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMatch, TMatchFilters } from '_app/features/Games/types';
import { chain, groupBy, toPairs } from 'lodash';
import dayjs from 'dayjs';

export type GamesSliceInitialState = {
  isFetching: boolean;
  matches: { [key: string]: { [key: string]: TMatch[] } };
};

const initialState: GamesSliceInitialState = {
  isFetching: false,
  matches: {},
};

export const getMatches = createAsyncThunk(
  'games/getMatches',
  async ({ id, name, filters }: { id: number; name: string; filters: TMatchFilters }, { rejectWithValue }) => {
    try {
      const filterStr = toPairs(filters)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');
      const res = await fetch(`https://api.opendota.com/api/players/${id}/matches?${filterStr}`);
      const matches = (await res.json()) as TMatch[];
      return {
        matches: chain(matches)
          .map((match) => ({ ...match, date_str: dayjs.unix(match.start_time).format('YYYY-MM') }))
          .groupBy('date_str')
          .value(),
        name,
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatches.fulfilled, (state, action) => {
      const { name, matches } = action.payload;
      state.matches[name] = matches;
    });
  },
});

export const {} = gamesSlice.actions;
export default gamesSlice.reducer;
