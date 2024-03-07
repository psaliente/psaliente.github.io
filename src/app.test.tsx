import { render, screen } from "@testing-library/react";
import App from "./app";

test("Renders portfolio", () => {
  render(<App />);
  const _el = screen.getByText("Peter John C. Saliente");
  expect(_el).toBeInTheDocument();
});
