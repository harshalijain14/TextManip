import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import Alert from "./components/alert";
import {
  Route,
  Routes,
  BrowserRouter,Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextManip" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/>         //this will pass the .defaultProps values */}
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter text:"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
