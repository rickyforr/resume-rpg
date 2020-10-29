import React from "react";
import "./App.css";
import { WorldContainer } from "./features/world/world.container";

const App = () => {
  return (
    <div className="App">
      <WorldContainer />
      <h2 className="game_title">
        Resume Quest <p className="game_instructions">(use arrow keys to move player)</p>
      </h2>
    </div>
  );
};

export default App;
