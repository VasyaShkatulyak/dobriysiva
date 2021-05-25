import Home from "./components/Home/Home";
import ProPages from './components/Culture/Berley'
import Login from './components/Login/Login'
import Pshenica from "./components/Culture/Pshenica";
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

        <Route path="/pshenica">
          <Pshenica />
        </Route>

        <Route path="/berley">
          <ProPages />
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
