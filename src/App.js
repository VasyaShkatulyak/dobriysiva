import Home from "./pages/Home";
import SimplePage from './pages/SimplePage'
import ProPages from './pages/ProPages'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/page">
          <SimplePage />
        </Route>

        <Route path="/pagepro">
          <ProPages />
        </Route>

      </Switch>

    </Router>

  )
}

export default App;
