import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import gameSlice from '_app/features/Games/gamesSlice';
import heroesSlice from '_app/features/Heroes/heroesSlice';
import settingsSlice from '_app/features/Settings/settingsSlice';

export {};
export const store = configureStore({
  reducer: {
    games: gameSlice,
    heroes: heroesSlice,
    settings: settingsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
