import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import DaftarPage from "./pages/DaftarPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/daftar" component={DaftarPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects/:id" component={ProjectsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
