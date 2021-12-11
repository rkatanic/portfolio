import { render } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Loader", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Loader />);

    expect(baseElement).toMatchSnapshot();
  });
});
