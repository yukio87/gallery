import { createSlice } from '@reduxjs/toolkit';
function getThemeFromLS() {
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
        setTheme(state, action) {
            state.theme = action.payload;
        },
    },
});
export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
export const getTheme = (store) => store.theme;
