import "./css/App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Overviev from "./components/Overviev";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";
import RegistrationDone from "./components/RegistrationDone";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyContext from "./context";

function App() {
  const [state, setState] = useState({});
  const value = { state, setState };
  console.log(state);
  return (
    <div>
      <MyContext.Provider value={value}>
        <Header />
        <Main />
        <Overviev />
        <Router>
          <Route path="/" exact  component={Registration} />
          <Route path="/second" exact component={RegistrationDone} />
        </Router>
        <FAQ />
      </MyContext.Provider>
    </div>
  );
}

export default App;