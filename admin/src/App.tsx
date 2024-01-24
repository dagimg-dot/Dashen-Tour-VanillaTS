import { Route, Router } from "@solidjs/router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations/Destinations";
import NewDestination from "./pages/Destinations/NewDestination";

function App() {
  return (
    <Router>
      <Route path={"/"} component={Dashboard} />
      <Route path={"/destinations"}>
        <Route path={"/"} component={Destinations} />
        <Route path={"/new"} component={NewDestination} />
      </Route>
      <Route path={"/login"} component={Login} />
    </Router>
  );
}

export default App;
