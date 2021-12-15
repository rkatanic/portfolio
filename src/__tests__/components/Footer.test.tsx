import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toMatchSnapshot();
  });
});
