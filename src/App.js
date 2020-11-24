import './App.css';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './Pages/Home';
import Random from './Pages/Random';
import FourZeroFour from './Pages/FourZeroFour';

function App() {
  return (
    <div className="background">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/random">
          <Random />
        </Route>
        <Route path="*">
          <FourZeroFour />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
