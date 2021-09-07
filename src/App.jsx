import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    
    <div className="App">
      <Router>
      <Homepage />
      </Router>

      </div>
    
  );
}

export default App;
