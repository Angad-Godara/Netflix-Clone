import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './Components/LoginScreen'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './Components/Profile';
import Auth from './Components/UserUp/Auth';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          photoURL: userAuth?.photoURL
        }))

      } else {
        dispatch(logout());
      }
    })

    return (() => {
      unsubscribe();
    })

  }, [])


  return (
    <div className="app">
      <Router>
        {!user ?
          <LoginScreen />
          : (
            <Routes>
              <Route exact path="/"
                element={<HomeScreen />}
              />
              <Route exact path="/profile"
                element={<Profile />}
              />
              <Route exact path="/auth"
                element={<Auth />}
              />
            </Routes>
          )}
      </Router>
    </div >
  );
}

export default App;
