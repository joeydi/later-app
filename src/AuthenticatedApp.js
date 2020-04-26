import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import GetPathPart from "./utils/GetPathPart";

import Header from "./components/Header";
import UnreadBookmarks from "./pages/UnreadBookmarks";
import StarredBookmarks from "./pages/StarredBookmarks";
import ArchivedBookmarks from "./pages/ArchivedBookmarks";
import NotFound from "./pages/NotFound";

const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route
        render={({ location }) => {
          return (
            <div className="main-transition-group">
              <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={750} classNames="fade">
                  <div className="main-transition-item">
                    <Switch location={location}>
                      <Route exact path="/" component={UnreadBookmarks} />
                      <Route exact path="/starred" component={StarredBookmarks} />
                      <Route exact path="/archive" component={ArchivedBookmarks} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          );
        }}
      />
    </BrowserRouter>
  );
};

export default AuthenticatedApp;
