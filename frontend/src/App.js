import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import Header from "./Components/Header";

// Pages
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/car/:id" component={CarPage} />
            <Route exact path="/cart" component={CartPage} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
