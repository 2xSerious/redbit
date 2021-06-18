import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSubReddits } from '../../app/redditApi';

export const loadSubreddits = createAsyncThunk(
    "subreddits/loadSubreddits",
    async () => {
        return await fetchSubReddits();
    }
)

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subredditsList: [],
        currentSubreddit: '',
    },
    reducers: {
        setCurrentSubreddit: (state, action) => {
            state.currentSubreddit = action.payload;
        }
    },
    extraReducers: {
        [loadSubreddits.pending]: (state, action) => {
            console.log('pending');
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            state.subredditsList = action.payload;
        },
        [loadSubreddits.rejected]: (state, action) => {
            console.log('rejected');
        },
    }
});

export const selectSubredditsList = state => state.subreddits.subredditsList;
export const { setCurrentSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;