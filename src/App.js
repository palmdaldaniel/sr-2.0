import "./App.css";
import Home from "./pages/Home";

import ChannelProvider from "./contexts/ChannelProvider";

function App() {
  return (
    <div className="App">
      <ChannelProvider>
        <Home />
      </ChannelProvider>
    </div>
  );
}

export default App;
