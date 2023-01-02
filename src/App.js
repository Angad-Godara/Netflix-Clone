import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './Components/LoginScreen'

function App() {

  const user = null;

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
            </Routes>
          )}
      </Router>
    </div>
  );
}

export default App;
