import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Splash";

function App() {
  return (
    // BEM convention
    <div className="App">
      <h1>Welcome to BuyBucket!</h1>
      {/* Header - top part of app */}
      {/* Home - Splash component */}

      <Header />
      <Home />
    </div>
  );
}

export default App;
