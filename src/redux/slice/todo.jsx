import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    console.log("Fetching todos...");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
    return data;
});

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,   
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;  // Correct state assignment
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                console.log("Error", action.error);
                state.isLoading = false;
                state.isError = true;
            });
    },
});

// Export the reducer to be used in the store
export default todoSlice.reducer;