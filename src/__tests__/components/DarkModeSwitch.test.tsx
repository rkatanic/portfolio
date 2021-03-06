import { fireEvent, render } from "@testing-library/react";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import { GlobalContext } from "../../context/GlobalContext";

describe("DarkModeSwitch", (): void => {
  it("should display moon icon when dark mode is off ", (): void => {
    Storage.prototype.setItem = jest.fn(() => {});
    jest.spyOn(document.body.classList, "add");
    const { getByText } = render(
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
        <DarkModeSwitch />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      "dark-mode",
      "false"
    );
    expect(window.document.body.classList.add).toHaveBeenNthCalledWith(
      1,
      "day-mode"
    );
    expect(getByText("moon.svg")).toBeInTheDocument();
  });

  it("should display sun icon when dark mode is on", (): void => {
    Storage.prototype.removeItem = jest.fn(() => {});
    jest.spyOn(document.body.classList, "remove");
    const { getByText } = render(
      <GlobalContext.Provider
        value={{
          isDarkMode: true,
          isRowSwap: false,
          hasCurvedBorders: false,
          toggleDarkMode: jest.fn(),
          toggleCurvedBorders: jest.fn(),
          toggleRowSwap: jest.fn(),
        }}
      >
        <DarkModeSwitch />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.removeItem).toHaveBeenNthCalledWith(
      1,
      "dark-mode"
    );
    expect(window.document.body.classList.remove).toHaveBeenNthCalledWith(
      1,
      "day-mode"
    );
    expect(getByText("sun.svg")).toBeInTheDocument();
  });

  it("should handle dark mode toggling", (): void => {
    const mockToggleDarkMode = jest.fn();
    const { getByText } = render(
      <GlobalContext.Provider
        value={{
          isDarkMode: true,
          isRowSwap: false,
          hasCurvedBorders: false,
          toggleDarkMode: mockToggleDarkMode,
          toggleCurvedBorders: jest.fn(),
          toggleRowSwap: jest.fn(),
        }}
      >
        <DarkModeSwitch />
      </GlobalContext.Provider>
    );

    fireEvent.click(getByText("sun.svg"));

    expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
