import { createSlice } from '@reduxjs/toolkit';

interface State {
  theme: string;
}

interface Store {
  theme: State;
}

interface Action {
  type: string;
  payload: string;
}

function getThemeFromLS(): string {
  const storedTheme = localStorage.getItem('theme');
  const theme = storedTheme || 'light';

  return theme;
}

const initialState = {
  theme: getThemeFromLS(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: Action) {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;

export const getTheme = (store: Store): State => store.theme;
