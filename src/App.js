import Home from "./components/Home/Home";
import Corn from './components/Culture/Corn'
import Login from './components/Login/Login'
import Zernovi from "./components/Culture/Zernovi";
import Oves from "./components/Culture/Oves";
import { useState, useEffect } from 'react';
import fire from '../server/firebase.config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [pasword, setPasword] = useState(null);
  const [EError, setEError] = useState(null);
  const [hasAccaunt, setHasAccaunt] = useState(false);


  const cleanInput = () => {
    setEmail('')
    setPasword('')
  }

  const cleanError = () => {
    setEError('')
  }

  const login = () => {
    cleanError()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setEErrorZ(error.message)
      })

  }

  const logout = () => {
    fire.auth().signout()
  }

  const authLisener = () => {
    fire.auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        setUser(userAuth)
        cleanInput()
      } else {
        setUser('')
      }
    });
  }

  useEffect(() => {
    authLisener()
  }, [])

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
          <Login
            login={login}
            setEError={setEError}
            setEmail={setEmail}
            error={EError}
            email={email}
            password={password}
            hasAccaunt={hasAccaunt}
            setHasAccaunt={setHasAccaunt}
          />
        </Route>

        {/* <Route path="/*">
          <ErrorPage />
        </Route> */}

      </Switch>

    </Router>

  )
}

export default App;
