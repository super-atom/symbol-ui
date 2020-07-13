import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
};

const profileSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        fetchData: (state, action) => {
            return {
                todos: action.payload
            };
        }
    }
});

export const { fetchData } = profileSlice.actions;

export default profileSlice.reducer;