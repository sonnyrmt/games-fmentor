import "./App.css";
import { Route , Switch} from "react-router-dom";
import Welcome from "./components/welcome/Welcome.jsx";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Filters from "./components/filters/Filters";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Nav />
          <Filters />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
