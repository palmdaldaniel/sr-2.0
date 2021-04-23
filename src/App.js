import "./App.css";
import Home from "./pages/Home";
import ChannelPage from "./pages/ChannelPage";
import RadioProvider from "./contexts/RadioProvider";

import { BrowserRouter, Route } from "react-router-dom";
import ProgramsPage from "./pages/ProgramsPage";
import Navbar from './components/Navbar'
import LoginPage from "./pages/LoginPage";



function App() {

  return (
    <div className="App">
      <RadioProvider>
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path="/channels/:id" component={ChannelPage} />
          <Route exact path='/programs' component={ProgramsPage} />
          <Route exact path='/login' component={LoginPage} />
        </BrowserRouter>
      </RadioProvider>
    </div>
  );
}

export default App;
