import Home from "./components/Home/Home";
import Corn from './components/Culture/Corn'
import Login from './components/Login/Login'
import Zernovi from "./components/Culture/Zernovi";
import Oves from "./components/Culture/Oves";

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

        <Route path="/zernovi">
          <Zernovi />
        </Route>

        <Route path="/corn">
          <Corn />
        </Route>

        <Route path="/oves">
          <Oves />
        </Route>

        <Route path="/logIn">
          <Login />
        </Route>

      </Switch>

    </Router>

  )
}

export default App;
