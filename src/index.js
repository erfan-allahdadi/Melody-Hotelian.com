import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// styled-components
import { ThemeProvider } from "styled-components";

// theme
import { melodyTheme } from "./styles";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

    <ThemeProvider theme={melodyTheme}>
      <App />
    </ThemeProvider>

  </Provider>
);
