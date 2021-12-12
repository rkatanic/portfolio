import { fireEvent, render } from "@testing-library/react";
import About from "../../pages/About";

describe("About", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<About />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should open cv link", (): void => {
    global.open = jest.fn();
    const { getByText } = render(<About />);

    fireEvent.click(getByText("Download CV"));

    expect(global.open).toHaveBeenNthCalledWith(
      1,
      "https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view",
      "_blank"
    );
  });
});
