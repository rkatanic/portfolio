import { render } from "@testing-library/react";
import Skills from "../../pages/Skills";

describe("Skills", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Skills />);

    expect(baseElement).toMatchSnapshot();
  });
});
