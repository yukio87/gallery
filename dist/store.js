import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './features/filters/filtersSlice';
import paginationReducer from './features/pagination/paginationSlice';
import themeReducer from './features/theme/themeSlice';
const store = configureStore({
    reducer: {
        filters: filtersReducer,
        pagination: paginationReducer,
        theme: themeReducer,
    },
});
export default store;
