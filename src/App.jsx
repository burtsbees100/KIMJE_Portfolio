import { useState } from "react";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleEnter = () => {
    setShowLanding(false);
  };

  return <>{showLanding ? <Landing onEnter={handleEnter} /> : <Home />}</>;
};

export default App;
