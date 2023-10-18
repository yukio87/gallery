import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currentPage: 1,
};
const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        updateCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },
});
export const { updateCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
export const getCurrentPage = (store) => store.pagination.currentPage;
