import { configureStore } from '@reduxjs/toolkit';

import subredditsReducer from '../features/Subreddits/subredditsSlice';
import postsSliceReducer from '../features/Posts/postsSlice';
import searchReducer from '../features/SearchBar/searchSlice';
import aboutReducer from '../features/Posts/About/aboutSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsSliceReducer,
    search: searchReducer,
    about: aboutReducer,
  },
});
