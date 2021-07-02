import "./App.css";
import { connect } from "react-redux";
import { Header } from "./components/Header";
import { moviesRequest } from "./redux/action";

const App = () => {
  return <Header />;
};

export default connect(null, moviesRequest())(App);
