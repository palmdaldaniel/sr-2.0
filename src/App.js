import "./App.css";
import Home from "./pages/Home";
import ChannelPage from "./pages/ChannelPage";
import RadioProvider from "./contexts/RadioProvider";
import UserProvider from "./contexts/UserProvider";
import FavoriteProvider from "./contexts/FavoriteProvider";

import { BrowserRouter, Route } from "react-router-dom";
import ProgramsPage from "./pages/ProgramsPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <RadioProvider>
        <UserProvider>
          <FavoriteProvider>
            <BrowserRouter>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/channels/:id" component={ChannelPage} />
              <Route exact path="/programs" component={ProgramsPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/favorites" component={Favorites} />
            </BrowserRouter>
          </FavoriteProvider>
        </UserProvider>
      </RadioProvider>
    </div>
  );
}

export default App;
