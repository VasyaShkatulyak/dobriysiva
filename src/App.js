import Home from "./components/Home/Home";
import Corn from './components/Culture/Corn'
import Login from './components/Login/Login'
import Zernovi from "./components/Culture/Zernovi";
import Oves from "./components/Culture/Oves";
import { useState, useEffect } from 'react';
import {auth} from './server/firebase.config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
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
          <Login />
        </Route>

        {user?<p><button onClick={() => auth.signOut()}>Sign out</button></p>:<Route path="/logIn">
          <Login />
        </Route>}

        {/* <Route path="/*">
          <ErrorPage />
        </Route> */}

      </Switch>

    </Router>

  )
}

export default App;
