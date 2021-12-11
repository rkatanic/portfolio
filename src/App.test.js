import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    const { queryByText } = render(<App />);

    expect(queryByText("I'm Radivoje Katanic.")).toBeInTheDocument();
  });
});
