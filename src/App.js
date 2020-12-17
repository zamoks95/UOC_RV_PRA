import Home from "./Home";
import Catalog from "./Catalog";
import Inspiration from "./Inspiration";
import NotFound from "./NotFound";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/inspiration" component={Inspiration} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default App;
