import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";
import { useTheme } from "./components/Context/ThemeContext";
import CustomizedSwitches from "./components/context/CustomizedSwitches";
import Footer from "./components/context/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-${theme}`}>
      <CustomizedSwitches onClick={toggleTheme} />
      <div className="header-container">
        <h1 className="disney-header">Disney Characters</h1>
      </div>
      <CharacterList theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
