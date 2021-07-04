import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Header, MoviesList, MovieView } from "./components";
import { moviesRequest } from "./redux/action";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MoviesList} />
        <Route path="/movie/:slug" component={MovieView} />
      </Switch>
    </Router>
  );
};

export default connect(null, moviesRequest())(App);
