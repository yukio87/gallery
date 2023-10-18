import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    inputNameCurVal: '',
    selectAuthorIdCurVal: 0,
    selectAuthorNameCurVal: 'Author',
    selectLocationIdCurVal: 0,
    selectLocationCurVal: 'Location',
    RangeCreatedTitle: 'Created',
    inputCreatedFromCurVal: '',
    inputCreatedBeforeCurVal: '',
};
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateName(state, action) {
            state.inputNameCurVal = action.payload
                ? action.payload[0].toUpperCase() + action.payload.slice(1)
                : '';
        },
        updateAuthorId(state, action) {
            state.selectAuthorIdCurVal = action.payload;
        },
        updateAuthorName(state, action) {
            state.selectAuthorNameCurVal = action.payload;
        },
        updateLocationId(state, action) {
            state.selectLocationIdCurVal = action.payload;
        },
        updateLocation(state, action) {
            state.selectLocationCurVal = action.payload;
        },
        updateCreatedTitle(state) {
            state.RangeCreatedTitle =
                state.inputCreatedFromCurVal || state.inputCreatedBeforeCurVal
                    ? `Created ${state.inputCreatedFromCurVal ? state.inputCreatedFromCurVal : '...'} - ${state.inputCreatedBeforeCurVal ? state.inputCreatedBeforeCurVal : '...'}`
                    : 'Created';
        },
        updateCreatedFrom(state, action) {
            state.inputCreatedFromCurVal = action.payload;
        },
        updateCreatedBefore(state, action) {
            state.inputCreatedBeforeCurVal = action.payload;
        },
    },
});
export const { updateName, updateAuthorId, updateAuthorName, updateLocationId, updateLocation, updateCreatedTitle, updateCreatedFrom, updateCreatedBefore, } = filtersSlice.actions;
export default filtersSlice.reducer;
export const getFilters = (store) => store.filters;
