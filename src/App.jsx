import Auth from "./components/Auth/Auth";
import { Router, Route } from "@solidjs/router";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <Router>
      <Route path="/" component={Auth} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
