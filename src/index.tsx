import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import "./main.scss";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
