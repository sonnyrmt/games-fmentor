import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home.jsx'
import Platform from './components/platform/platform';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/platform'>
          <Platform />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
