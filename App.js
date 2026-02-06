import questionsRaw from "./assets/40Questions.json";

import React, { useState } from "react";
import questionsRaw from "./assets/40Questions.json";

export default function App() {
  const [answers, setAnswers] = useState({});

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h1>Quiz</h1>

      {questionsRaw.map((q, qIndex) => (
        <div
          key={qIndex}
          style={{
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 15,
            marginBottom: 15,
          }}
        >
          <h3>
            {qIndex + 1}. {q.question}
          </h3>

          {q.options.map((option, optIndex) => (
            <label key={optIndex} style={{ display: "block", cursor: "pointer" }}>
              <input
                type="radio"
                name={`question-${qIndex}`}
                checked={answers[qIndex] === optIndex}
                onChange={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    [qIndex]: optIndex,
                  }))
                }
              />
              {" "}{option}
            </label>
          ))}

          {/* Optional correctness check */}
          {answers[qIndex] !== undefined && (
            <p style={{ fontWeight: "bold" }}>
              {answers[qIndex] === q.answer ? "✅ Correct" : "❌ Incorrect"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
