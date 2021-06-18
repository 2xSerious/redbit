import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchAbout } from "../../../app/redditApi";

export const loadAboutPost = createAsyncThunk(
  "about/loadAboutPost",
  async ({ subreddit, id }) => {
    return await fetchAbout(subreddit, id);
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    post: [],
    comments: [],
    isLoading: false,
  },

  extraReducers: {
    [loadAboutPost.pending]: (state, action) => {
      console.log("pending");
      state.isLoading = true;
    },
    [loadAboutPost.fulfilled]: (state, action) => {
        state.post = action.payload[0].data.children[0].data;
        console.log('fulfilled');
        state.comments = action.payload[1].data.children;
        state.isLoading = false;
    },
    [loadAboutPost.rejected]: (state, action) => {
        console.log('rejected');
        state.isLoading = true;
    }
  },
});

export const selectPostAbout = state => state.about.post;
export const selectComments = state => state.about.comments;
export const selectIsLoadingAbout = state => state.about.isLoading;

export default aboutSlice.reducer;