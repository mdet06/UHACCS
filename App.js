import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import NewGameScreen from "./screens/NewGameScreen";
import TutorialScreen from "./screens/TutorialScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [screen, setScreen] = useState("home"); // home | new | tutorial | game
  const [gameConfig, setGameConfig] = useState(null);

  return (
    <>
      {screen === "home" && (
        <HomeScreen
          onNewGame={() => setScreen("new")}
          onTutorial={() => setScreen("tutorial")}
        />
      )}

      {screen === "new" && (
        <NewGameScreen
          onBack={() => setScreen("home")}
          onStart={(config) => {
            setGameConfig(config);
            setScreen("game");
          }}
        />
      )}

      {screen === "tutorial" && <TutorialScreen onBack={() => setScreen("home")} />}

      {screen === "game" && (
        <GameScreen
          config={gameConfig}
          onQuitToHome={() => {
            setGameConfig(null);
            setScreen("home");
          }}
        />
      )}
    </>
  );
}
