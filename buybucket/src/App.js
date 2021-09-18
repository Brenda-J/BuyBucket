import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    // BEM convention
    <div className="App">
      <h1>Welcome to BuyBucket!</h1>
      {/* Header - top part of app */}
      {/* Home - Splash component */}

      <Header />
    </div>
  );
}

export default App;
