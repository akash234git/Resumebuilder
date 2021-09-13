import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/details/Details";



function App() {

  
  return (
    <Router>
      
    <div className="App">
    <Switch>
     <Route path="/" exact component={Homepage}/>
     <Route path="/details" component={Details}/>
     </Switch>
     </div>
     
      </Router>
      
  );
}

export default App;
