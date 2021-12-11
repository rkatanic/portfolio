import { render } from "@testing-library/react";
import Contact from "../../pages/Contact";

describe("Contact", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Contact />);

    expect(baseElement).toMatchSnapshot();
  });
});
