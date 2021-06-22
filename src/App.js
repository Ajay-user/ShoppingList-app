import "./App.css";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
