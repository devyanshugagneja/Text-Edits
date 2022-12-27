import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes , Route,  } from "react-router-dom";
import About from "./components/About"
//import About from './components/About';
//let name="harry";
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Text Edits" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes >
            <Route path="/about" element={<About mode={mode}/>}>
              
            </Route>

            <Route path="/" element={  <TextForm 
                showAlert={showAlert}
                heading="Enter the Text below to Analyze"
                mode={mode}
              />}>
            
            </Route>
          </Routes>
          {/*<About/>*/}
        </div>
      </Router>
    </>
  );
}

export default App;
