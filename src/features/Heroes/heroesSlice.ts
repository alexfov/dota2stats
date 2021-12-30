import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '_app/core/redux';
import { THero } from '_app/features/Heroes/types';

const heroesAdapter = createEntityAdapter<THero>({});

export const getHeroes = createAsyncThunk<THero[]>('heroes/getHeroes', async (_prop, { rejectWithValue }) => {
  try {
    const heroesNotParsed = localStorage.getItem(`heroes`);
    if (heroesNotParsed) {
      return JSON.parse(heroesNotParsed) as THero[];
    } else {
      const res = await fetch(`https://api.opendota.com/api/heroes`);
      const heroes = (await res.json()) as THero[];
      localStorage.setItem('heroes', JSON.stringify(heroes));
      return heroes;
    }
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

const heroesSlice = createSlice({
  name: 'heroes',
  initialState: heroesAdapter.getInitialState(),
  reducers: {
    addHeroes: heroesAdapter.addOne,
    setHeroes: heroesAdapter.setAll,
    updateHeroes: heroesAdapter.updateOne,
  },
  extraReducers: (x) => {
    x.addCase(getHeroes.fulfilled, heroesAdapter.setAll);
  },
});

const heroesSelectors = heroesAdapter.getSelectors<RootState>((state) => state.heroes);

const selectAllHeroes = createSelector(
  (state: RootState) => heroesSelectors.selectAll(state),
  (heroes) => heroes,
);

const selectHeroById = (id: string) =>
  createSelector(
    (state: RootState) => heroesSelectors.selectById(state, id),
    (heroes) => heroes,
  );

export { heroesSelectors, selectAllHeroes, selectHeroById };
export const { addHeroes, setHeroes, updateHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;
