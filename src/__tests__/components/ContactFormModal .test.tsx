import { fireEvent, render } from "@testing-library/react";
import ContactFormModal from "../../components/contact/ContactFormModal";

describe("ContactFormModal ", (): void => {
  it("should render success message", (): void => {
    const { baseElement } = render(
      <ContactFormModal isSuccess={true} isOpen={true} closeModal={jest.fn()} />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should render error message", (): void => {
    const { baseElement } = render(
      <ContactFormModal
        isSuccess={false}
        isOpen={true}
        closeModal={jest.fn()}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("should close modal", (): void => {
    const mockCloseModal = jest.fn();
    const { getByText } = render(
      <ContactFormModal
        isSuccess={false}
        isOpen={true}
        closeModal={mockCloseModal}
      />
    );

    fireEvent.click(getByText("close.svg"));

    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });
});
