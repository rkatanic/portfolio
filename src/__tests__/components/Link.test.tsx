import { fireEvent, getByRole, render } from "@testing-library/react";
import Link from "../../components/Link";

describe("Link", (): void => {
  it("should render link with icon", (): void => {
    const { getByText } = render(
      <Link href="icon href" icon={<div>link icon</div>} />
    );

    expect(getByText("link icon")).toBeInTheDocument();
  });

  it("should render link with label", (): void => {
    const { getByText } = render(<Link href="icon href" label="link label" />);

    expect(getByText("link label")).toBeInTheDocument();
  });

  it("should redirect to correct link", (): void => {
    const { container } = render(<Link href="test href" label="test label" />);

    expect(container.querySelector(".link")).toHaveAttribute(
      "href",
      "test href"
    );
  });

  it("should open link in new window", (): void => {
    const { container } = render(<Link href="test href" label="test label" />);

    expect(container.querySelector(".link")).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(container.querySelector(".link")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });
});
