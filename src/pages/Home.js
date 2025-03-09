import React, { useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    console.log("Generating image for:", prompt);
    // Add your image generation logic here
  };

  return (
    <div>
      <Header />
      <section className="hero">
        <h2>Transform Your Imagination into Art</h2>
        <input
          type="text"
          placeholder="Enter your creative prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </section>
    </div>
  );
};

export default Home;
