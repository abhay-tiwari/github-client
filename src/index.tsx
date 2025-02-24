import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
