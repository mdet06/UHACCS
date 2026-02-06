import { useEffect, useMemo, useReducer, useState } from "react";
import questionsRaw from "../assets/40Questions.json";

import GameHUD from "../components/game/GameHUD";
import ControlsBar from "../components/game/ControlsBar";
import QuestionModal from "../components/game/overlays/QuestionModal";
import ResultModal from "../components/game/overlays/ResultModal";
import ShopModal from "../components/game/overlays/ShopModal";
import PauseModal from "../components/game/overlays/PauseModal";

import { makeQuestionBank, pickQuestion } from "../questions/questionService";
import { createInitialGameState } from "../game/engine/createInitialGameState";
import { gameReducer } from "../game/engine/gameReducer";

export default function GameScreen({ config, onQuitToHome }) {
  const bank = useMemo(() => makeQuestionBank(questionsRaw), []);
  const [state, dispatch] = useReducer(gameReducer, createInitialGameState(config));

  const [questionOpen, setQuestionOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [pauseOpen, setPauseOpen] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [result, setResult] = useState(null); // { correct, explanation, correctChoiceId }

  // simple level timer tick (1 second)
  useEffect(() => {
    if (state.paused) return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(id);
  }, [state.paused]);

  useEffect(() => {
    if (state.timeLeft <= 0) {
      dispatch({ type: "PAUSE", value: true });
      setPauseOpen(true);
    }
  }, [state.timeLeft]);

  function openQuestion() {
    const q = pickQuestion(bank, config);
    setCurrentQuestion(q);
    setResult(null);
    setQuestionOpen(true);
  }

  function handleAnswer(choiceId) {
    if (!currentQuestion) return;

    const correct = choiceId === currentQuestion.answer;
    if (correct) dispatch({ type: "EARN_COINS", amount: 10 });

    setResult({
      correct,
      explanation: currentQuestion.explanation || (correct ? "Nice!" : "Review the concept and try again."),
      correctChoiceId: currentQuestion.answer,
    });

    setQuestionOpen(false);
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <GameHUD
        theme={config?.theme}
        level={state.level}
        coins={state.coins}
        timeLeft={state.timeLeft}
        paused={state.paused}
      />

      {/* Placeholder “battlefield” area */}
      <div
        style={{
          marginTop: 12,
          height: 360,
          borderRadius: 14,
          border: "1px solid #ddd",
          background: "linear-gradient(180deg, #fafafa, #f2f2f2)",
          display: "grid",
          placeItems: "center",
          color: "#333",
          fontWeight: 700,
        }}
      >
        Game Board Placeholder (you’ll replace this with grid + sprites + collisions)
      </div>

      <ControlsBar
        onAnswerQuestion={openQuestion}
        onMarketplace={() => setShopOpen(true)}
        onPause={() => {
          dispatch({ type: "PAUSE", value: true });
          setPauseOpen(true);
        }}
      />

      {questionOpen && currentQuestion && (
        <QuestionModal
          question={currentQuestion}
          onPickAnswer={handleAnswer}
          onClose={() => setQuestionOpen(false)}
        />
      )}

      {result && (
        <ResultModal
          result={result}
          onNext={() => {
            setResult(null);
            setCurrentQuestion(null);
          }}
        />
      )}

      {shopOpen && (
        <ShopModal
          coins={state.coins}
          onBuy={(itemId) => dispatch({ type: "BUY_ITEM", itemId })}
          onClose={() => setShopOpen(false)}
        />
      )}

      {pauseOpen && (
        <PauseModal
          timeLeft={state.timeLeft}
          onResume={() => {
            dispatch({ type: "PAUSE", value: false });
            setPauseOpen(false);
          }}
          onQuit={() => {
            setPauseOpen(false);
            onQuitToHome();
          }}
        />
      )}
    </div>
  );
}
