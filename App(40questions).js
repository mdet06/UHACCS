
import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

// IMPORTANT: use require for device compatibility
const questions = require("./data/40Questions.json");

export default function App() {
  const [answers, setAnswers] = useState({});
  const [topicFilter, setTopicFilter] = useState("All");

  const topics = useMemo(() => {
    const set = new Set(questions.map((q) => q.topic).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredQuestions = useMemo(() => {
    if (topicFilter === "All") return questions;
    return questions.filter((q) => q.topic === topicFilter);
  }, [topicFilter]);

  const score = useMemo(() => {
    let s = 0;
    for (const q of filteredQuestions) {
      if (answers[q.id] && answers[q.id] === q.answer) s += 1;
    }
    return s;
  }, [answers, filteredQuestions]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 10 }}>
          Factoring Practice
        </Text>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#eee",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Score: {score} / {filteredQuestions.length}
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", gap: 8, marginTop: 10 }}>
              {topics.map((topic) => (
                <TouchableOpacity
                  key={topic}
                  onPress={() => setTopicFilter(topic)}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor:
                      topicFilter === topic ? "#333" : "#ddd",
                    backgroundColor:
                      topicFilter === topic ? "#333" : "#fff",
                  }}
                >
                  <Text
                    style={{
                      color: topicFilter === topic ? "#fff" : "#000",
                      fontWeight: "600",
                    }}
                  >
                    {topic}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <TouchableOpacity
            onPress={() => setAnswers({})}
            style={{
              marginTop: 12,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#ddd",
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ fontWeight: "600" }}>Reset Answers</Text>
          </TouchableOpacity>
        </View>

        {filteredQuestions.map((q, idx) => {
          const selected = answers[q.id];
          const isAnswered = selected !== undefined;
          const isCorrect = selected === q.answer;

          return (
            <View
              key={q.id}
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 12,
                padding: 14,
                marginBottom: 14,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                {idx + 1}. {q.question}
              </Text>

              {q.topic ? (
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                    color: "#555",
                  }}
                >
                  Topic: {q.topic}
                </Text>
              ) : null}

              <View style={{ marginTop: 10 }}>
                {q.choices.map((choice, cIdx) => {
                  const checked = selected === choice;

                  return (
                    <TouchableOpacity
                      key={cIdx}
                      onPress={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: choice,
                        }))
                      }
                      style={{
                        padding: 10,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: checked ? "#333" : "#eee",
                        backgroundColor: checked ? "#f0f0f0" : "#fff",
                        marginBottom: 8,
                      }}
                    >
                      <Text style={{ fontWeight: "600" }}>
                        {String.fromCharCode(65 + cIdx)}. {choice}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {isAnswered && (
                <Text
                  style={{
                    marginTop: 8,
                    fontWeight: "700",
                    color: isCorrect ? "green" : "red",
                  }}
                >
                  {isCorrect
                    ? "✅ Correct"
                    : `❌ Incorrect — Correct answer: ${q.answer}`}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
