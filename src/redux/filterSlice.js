const { createSlice } = require("@reduxjs/toolkit");


const filtersInitialState = {
    queryFilter: '',
    showFilter: false,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setQueryFilter(state, action) {
            state.queryFilter = action.payload;
        },
        toggleStatusFilter(state, action) {
            state.showFilter = action.payload;
        },
    },
});

export const { setQueryFilter, toggleStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;