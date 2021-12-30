import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface SettingsSliceInitialState {
  isFetching: boolean;
  selectedDate: string;
}

const initialState: SettingsSliceInitialState = {
  isFetching: false,
  selectedDate: dayjs().format('YYYY-MM'),
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSelectedDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = settingsSlice.actions;
export default settingsSlice.reducer;
