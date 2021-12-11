import { fireEvent, render } from "@testing-library/react";
import ProgressBar from "../../components/ProgressBar";

describe("ProgressBar", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<ProgressBar />);

    expect(baseElement).toMatchSnapshot();
  });
});
