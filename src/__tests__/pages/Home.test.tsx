import { render } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Home", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Home />);

    expect(baseElement).toMatchSnapshot();
  });
});
