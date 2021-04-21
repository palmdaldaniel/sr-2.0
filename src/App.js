import "./App.css";
import Home from "./pages/Home";
import ChannelPage from "./pages/ChannelPage";
import ChannelProvider from "./contexts/ChannelProvider";

import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <ChannelProvider>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path="/channels/:id" component={ChannelPage} />
        </BrowserRouter>
      </ChannelProvider>
    </div>
  );
}

export default App;
