import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../app";

test("renders Hello From Github Client App", () => {
  render(<App />);

  const helloElement = screen.getByText(/Hello From Github Client App/i);
  expect(helloElement).toBeInTheDocument();
});
