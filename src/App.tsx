import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Header, MoviesList, MovieView, MoviesFavorites } from "./components";
import { moviesRequest } from "./redux/actions";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MoviesList} />
        <Route path="/movie/:slug" component={MovieView} />
        <Route path="/favorites" component={MoviesFavorites} />
      </Switch>
    </Router>
  );
};

export default connect(null, moviesRequest())(App);
