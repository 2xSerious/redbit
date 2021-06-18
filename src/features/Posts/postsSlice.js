import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPosts, fetchSearch, fetchNewPosts, fetchTopPosts } from '../../app/redditApi';


export const loadPosts = createAsyncThunk(
    "posts/loadPosts",
    async (subreddit) => {
        return await fetchPosts(subreddit);
    }
);

export const loadSearchResults = createAsyncThunk(
    "posts/loadSearchResults",
    async (searchTerm) => {
        return await fetchSearch(searchTerm);
    }
);

export const loadNewPosts = createAsyncThunk(
    "posts/loadNewPosts",
    async (subreddit) => {
        return await fetchNewPosts(subreddit);
    }
);

export const loadTopPosts = createAsyncThunk(
    "posts/loadTopPosts",
    async (subreddit) => {
        return await fetchTopPosts(subreddit);
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
     
    },
    reducers: {

    },
    extraReducers: {
        // Load post 
        [loadPosts.pending]: (state, action) => {
            console.log('pending');
            state.isLoading = true;
        },
        [loadPosts.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.posts = action.payload;
            console.log(state.posts);
            state.isLoading = false;
        },
        [loadPosts.rejected]: (state, action) => {
            console.log('rejected');
            state.isLoading = true;
            
        },

        // Load search results
        [loadSearchResults.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            console.log('fulfilled');
            state.posts = action.payload;
            state.isLoading = false;
        },
        [loadSearchResults.rejected]: (state, action) => {
            console.log('rejected');
            state.isLoading = true;
        },
        
        // Load New Posts
        [loadNewPosts.pending]: (state, action) => {
            console.log('pending/NewPosts');
            state.isLoading = true;
        },
        [loadNewPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            console.log('fulfilled/NewPots');
            state.isLoading = false;
        },
        [loadNewPosts.rejected]: (state, action) => {
            console.log('rejected/NewPots');
            state.isLoading = true;
        },

        // Load Top Posts
        [loadTopPosts.pending]: (state, action) => {
            console.log('pending/TopPosts');
            state.isLoading = true;
        },
        [loadTopPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            console.log('fulfilled/TopPosts');
            state.isLoading = false;
        },
        [loadTopPosts.rejected]: (state, action) => {
            console.log('rejected/TopPosts');
            state.isLoading = true;
        },

        
    }
});

// export const isLoadingPosts = state => state.posts.isLoading;
export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;

export default postsSlice.reducer;