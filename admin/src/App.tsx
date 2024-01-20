import { Route, Router } from "@solidjs/router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Route path={"/"} component={Dashboard} />
      <Route path={"/login"} component={Login} />
    </Router>
  );
}

export default App;
