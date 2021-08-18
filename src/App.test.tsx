import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("displays todos", async () => {
  const { container } = render(<App />);
  const loader = await screen.findByText("Todos");
  await waitFor(() => expect(loader).toBeDefined());

  expect(container.querySelectorAll(".todo").length).toBeGreaterThan(0);
});
