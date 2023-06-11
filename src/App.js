import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./theme";

import RoutesComponent from "./navigation";
import store from "./store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <RoutesComponent></RoutesComponent>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
