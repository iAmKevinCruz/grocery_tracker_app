import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "./App.css";
import NavBar from "./components/navBar";
import GroceryForm from "./components/groceryForm";
import GlobalState from "./context/globalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <NavBar></NavBar>

          <div className="container">
            <Routes>
              <Route path="/" exact element={<GroceryForm />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
