import Visualizer from "./Visualizer";
import Catalog from "./Catalog";
import Inspiration from "./Inspiration";
import NotFound from "./NotFound";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/visualizer" component={Visualizer} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/inspiration" component={Inspiration} />
      <Route exact path="/">
        <Redirect to="/catalog" />
      </Route>
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default App;
