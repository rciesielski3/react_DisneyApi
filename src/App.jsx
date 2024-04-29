import { useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  document.body.className = `${theme}-theme`;

  return (
    <div className="app">
      <h1 className="disney-header">Disney Characters</h1>
      <CharacterList theme={theme} />
      <footer className="footer">
        <a
          href="https://github.com/rciesielski3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <p>Copyright © 2024</p>
        <p>Author: Rafał Ciesielski</p>
        <button className="button" onClick={toggleTheme}>
          {theme === "light" ? "Dark theme" : "Light theme"}
        </button>
      </footer>
    </div>
  );
}

export default App;
