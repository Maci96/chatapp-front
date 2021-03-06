import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./styles.css";
import { ContextProvider } from "./Components/SocketContext";
ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
