import { render } from "@testing-library/react";
import Faq from "../../pages/Faq";

describe("FAQ page", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Faq />);

    expect(baseElement).toMatchSnapshot();
  });
});
