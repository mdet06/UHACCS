import { useMemo, useState } from "react";
import Button from "../components/common/Button";
import questionsRaw from "../assets/40Questions.json";
import { inferTopicsFromQuestions } from "../questions/questionService";

export default function NewGameScreen({ onBack, onStart }) {
  const topics = useMemo(() => inferTopicsFromQuestions(questionsRaw), []);
  const [theme, setTheme] = useState("starwars");
  const [subject, setSubject] = useState("math");
  const [topic, setTopic] = useState(topics[0] ?? "general");
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>New Game</h1>

      <div style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <label>
          <div style={{ fontWeight: 700 }}>Theme</div>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} style={{ width: "100%", padding: 8 }}>
            <option value="starwars">Star Wars (Empire vs Jedi)</option>
            <option value="beesVsBears">Bees vs Bears</option>
            <option value="armyVsAliens">Army vs Aliens</option>
            <option value="ninjaVsSamurai">Ninja vs Samurai</option>
          </select>
        </label>

        <label>
          <div style={{ fontWeight: 700 }}>Subject</div>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} style={{ width: "100%", padding: 8 }}>
            <option value="math">Math</option>
            <option value="english">English</option>
          </select>
        </label>

        <label>
          <div style={{ fontWeight: 700 }}>Topic</div>
          <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ width: "100%", padding: 8 }}>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label>
          <div style={{ fontWeight: 700 }}>Difficulty</div>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
        <Button
          onClick={() =>
            onStart({
              theme,
              subject,
              topic,
              difficulty,
            })
          }
        >
          Start Game
        </Button>
        <Button onClick={onBack} variant="secondary">
          Back
        </Button>
      </div>
    </div>
  );
}
