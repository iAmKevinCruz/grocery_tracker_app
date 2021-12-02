import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "./App.css";
import GroceryForm from "./components/groceryForm";
import GlobalState from "./context/globalState";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <GroceryForm />
//   );
// }

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          {/* <NavBar></NavBar> */}

          <div className="container">
            <Switch>
              <Route path="/" exact component={GroceryForm} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
