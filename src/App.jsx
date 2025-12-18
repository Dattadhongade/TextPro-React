import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${mode}`}>
      <Navbar
        title="TextPro"
        about="AboutTextPro"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm heading="Enter the text below to analyze" mode={mode} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
