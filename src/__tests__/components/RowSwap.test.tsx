import { fireEvent, render } from "@testing-library/react";
import RowSwap from "../../components/RowSwap";
import { GlobalContext } from "../../context/GlobalContext";

describe("RowSwap", (): void => {
  it("should add row swap class to body when row swap is on", (): void => {
    Storage.prototype.setItem = jest.fn(() => {});
    jest.spyOn(document.body.classList, "add");

    render(
      <GlobalContext.Provider
        value={{
          isDarkMode: false,
          isRowSwap: true,
          hasCurvedBorders: false,
          toggleDarkMode: jest.fn(),
          toggleCurvedBorders: jest.fn(),
          toggleRowSwap: jest.fn(),
        }}
      >
        <RowSwap />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      "row-swap",
      "true"
    );
    expect(window.document.body.classList.add).toHaveBeenNthCalledWith(
      1,
      "row-swap"
    );
  });

  it("should remove row swap class to body when row swap is off", (): void => {
    Storage.prototype.removeItem = jest.fn(() => {});
    jest.spyOn(document.body.classList, "remove");

    render(
      <GlobalContext.Provider
        value={{
          isDarkMode: false,
          isRowSwap: false,
          hasCurvedBorders: false,
          toggleDarkMode: jest.fn(),
          toggleCurvedBorders: jest.fn(),
          toggleRowSwap: jest.fn(),
        }}
      >
        <RowSwap />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.removeItem).toHaveBeenNthCalledWith(
      1,
      "row-swap"
    );
    expect(window.document.body.classList.remove).toHaveBeenNthCalledWith(
      1,
      "row-swap"
    );
  });

  it("should handle row swap toggle", (): void => {
    const mockToggleRowSwap = jest.fn();
    const { getByText } = render(
      <GlobalContext.Provider
        value={{
          isDarkMode: false,
          isRowSwap: false,
          hasCurvedBorders: false,
          toggleDarkMode: jest.fn(),
          toggleCurvedBorders: jest.fn(),
          toggleRowSwap: mockToggleRowSwap,
        }}
      >
        <RowSwap />
      </GlobalContext.Provider>
    );

    fireEvent.click(getByText("row-swap.svg"));

    expect(mockToggleRowSwap).toHaveBeenCalledTimes(1);
  });
});
