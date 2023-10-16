import { createSlice } from '@reduxjs/toolkit';

interface State {
  inputNameCurVal: string;
  selectAuthorIdCurVal: number;
  selectAuthorNameCurVal: string;
  selectLocationIdCurVal: number;
  selectLocationCurVal: string;
  RangeCreatedTitle: string;
  inputCreatedFromCurVal: string;
  inputCreatedBeforeCurVal: string;
}

interface Store {
  filters: State;
}

interface ActionPayloadStr {
  type: string;
  payload: string;
}

interface ActionPayloadNum {
  type: string;
  payload: number;
}

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
    updateName(state, action: ActionPayloadStr) {
      state.inputNameCurVal = action.payload
        ? action.payload[0].toUpperCase() + action.payload.slice(1)
        : '';
    },
    updateAuthorId(state, action: ActionPayloadNum) {
      state.selectAuthorIdCurVal = action.payload;
    },
    updateAuthorName(state, action: ActionPayloadStr) {
      state.selectAuthorNameCurVal = action.payload;
    },
    updateLocationId(state, action: ActionPayloadNum) {
      state.selectLocationIdCurVal = action.payload;
    },
    updateLocation(state, action: ActionPayloadStr) {
      state.selectLocationCurVal = action.payload;
    },
    updateCreatedTitle(state) {
      state.RangeCreatedTitle =
        state.inputCreatedFromCurVal || state.inputCreatedBeforeCurVal
          ? `Created ${state.inputCreatedFromCurVal ? state.inputCreatedFromCurVal : '...'} - ${
              state.inputCreatedBeforeCurVal ? state.inputCreatedBeforeCurVal : '...'
            }`
          : 'Created';
    },
    updateCreatedFrom(state, action: ActionPayloadStr) {
      state.inputCreatedFromCurVal = action.payload;
    },
    updateCreatedBefore(state, action: ActionPayloadStr) {
      state.inputCreatedBeforeCurVal = action.payload;
    },
  },
});

export const {
  updateName,
  updateAuthorId,
  updateAuthorName,
  updateLocationId,
  updateLocation,
  updateCreatedTitle,
  updateCreatedFrom,
  updateCreatedBefore,
} = filtersSlice.actions;

export default filtersSlice.reducer;

export const getFilters = (store: Store): State => store.filters;
