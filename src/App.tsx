import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import React from "react";
import HomePage from "./pages/home";
import PostPage from "./pages/post";
import AppContext from "./app-context";
import AppStore from "./stores/app";
import AppApi from "./apis/app";

const store = new AppStore();
const api = new AppApi(store);

function App() {
  return (
    <div className="app">
      <AppContext.Provider value={{ store, api }}>
        <BrowserRouter>
          <Switch>
            <Route path="/post/:postId" component={PostPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
