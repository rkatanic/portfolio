import { render } from "@testing-library/react";
import About from "../../pages/About";

describe("About", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<About />);

    expect(baseElement).toMatchSnapshot();
  });
});
