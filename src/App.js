import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { Header } from "./features/Header/header";
import Type from './features/Type/Type';

import Home from "./features/Posts/Home";
import Subreddits from "./features/Subreddits/Subreddit";
import Subredditlink from './features/Subreddits/Subredditlink';
import SearchResults from "./features/SearchBar/SearchResults";
import PostsType from "./features/Posts/PostType";
import About from "./features/Posts/About/About";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
        <div className='type-bar'>
        <Type />
        </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/r/:id" exact component ={Subredditlink} />
            <Route path="/search/:id" component={SearchResults} />
            <Route path="/new" component={PostsType} />
            <Route path="/top" component={PostsType} />
            <Route path="/r/:subreddit/:id" component={About} />
          </Switch>
        </main>

        <aside>
          <Subreddits />
          </aside>
      </div>
    </Router>
  );
}

export default App;
