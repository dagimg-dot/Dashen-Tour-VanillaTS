import { Route, Router } from "@solidjs/router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <Router>
      <Route path={"/"} component={Dashboard} />
      <Route path={"/destinations"} component={Destinations} />
      <Route path={"/login"} component={Login} />
    </Router>
  );
}

export default App;
