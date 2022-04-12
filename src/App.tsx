import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
// import { Provider } from "mobx-react";

//pages
import HomePage from "./pages/home";
import PostPage from "./pages/post";
//context
import AppContext from "./app-context";
//store
import AppStore from "./stores/app";
//api
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
