import "./App.css";
import { Provider } from "react-redux";
import Home from "./containers/home";
import {store} from "../src/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
