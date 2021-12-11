import { fireEvent, render } from "@testing-library/react";
import ColorModal from "../../components/ColorModal";

describe("ColorModal", (): void => {
  it("should handle color switch", (): void => {
    Storage.prototype.getItem = jest.fn(() => "160");
    const mockSwitchColor = jest.fn();
    const { getByTestId } = render(
      <ColorModal
        isOpen={true}
        closeModal={jest.fn()}
        switchColor={mockSwitchColor}
      />
    );

    fireEvent.click(getByTestId("color-item-10"));

    expect(mockSwitchColor).toHaveBeenNthCalledWith(1, 10);
  });
});
