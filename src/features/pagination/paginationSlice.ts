import { createSlice } from '@reduxjs/toolkit';

interface State {
  currentPage: number;
}

interface Store {
  pagination: State;
}

interface Action {
  type: string;
  payload: number;
}

const initialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    updateCurrentPage(state, action: Action) {
      state.currentPage = action.payload;
    },
  },
});

export const { updateCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;

export const getCurrentPage = (store: Store): number => store.pagination.currentPage;
