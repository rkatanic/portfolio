import { render } from "@testing-library/react";
import Services from "../../components/Services";

describe("Services", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Services />);

    expect(baseElement).toMatchSnapshot();
  });
});
