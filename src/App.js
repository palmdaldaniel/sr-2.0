import "./App.css";
import HomePage from "./pages/HomePage";
import ChannelPage from "./pages/ChannelPage";
import RadioProvider from "./contexts/RadioProvider";
import UserProvider from "./contexts/UserProvider";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "./contexts/UserProvider";

import ProgramsPage from "./pages/ProgramsPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Favorites from "./pages/Favorites";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <RadioProvider>
          <BrowserRouter>
            <Navbar />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/channels/:id" component={ChannelPage} />
            <Route exact path="/programs" component={ProgramsPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <ProtectedRoute exact path="/favorites" component={Favorites} />

            {/*  <Route exact path="/favorites" component={Favorites} /> */}
          </BrowserRouter>
        </RadioProvider>
      </UserProvider>
    </div>
  );
}

export default App;
