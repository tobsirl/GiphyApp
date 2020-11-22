import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Random from './Pages/Random';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
