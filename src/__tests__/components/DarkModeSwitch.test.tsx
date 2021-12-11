import { fireEvent, render } from "@testing-library/react";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import { GlobalContext } from "../../context/GlobalContext";

describe("DarkModeSwitch", (): void => {
  it("should display moon icon when dark mode is off ", (): void => {
    Storage.prototype.setItem = jest.fn(() => {});
    jest.spyOn(document.body, "setAttribute");
    const { getByText } = render(
      <GlobalContext.Provider
        value={{ isDarkMode: false, toggleDarkMode: jest.fn() }}
      >
        <DarkModeSwitch />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      "dark-mode",
      "false"
    );
    expect(window.document.body.setAttribute).toHaveBeenNthCalledWith(
      1,
      "class",
      "day-mode"
    );
    expect(getByText("moon.svg")).toBeInTheDocument();
  });

  it("should display sun icon when dark mode is on", (): void => {
    Storage.prototype.removeItem = jest.fn(() => {});
    jest.spyOn(document.body, "removeAttribute");
    const { getByText } = render(
      <GlobalContext.Provider
        value={{ isDarkMode: true, toggleDarkMode: jest.fn() }}
      >
        <DarkModeSwitch />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.removeItem).toHaveBeenNthCalledWith(
      1,
      "dark-mode"
    );
    expect(window.document.body.removeAttribute).toHaveBeenNthCalledWith(
      1,
      "class"
    );
    expect(getByText("sun.svg")).toBeInTheDocument();
  });

  it("should handle dark mode toggling", (): void => {
    const mockToggleDarkMode = jest.fn();
    const { getByText } = render(
      <GlobalContext.Provider
        value={{ isDarkMode: true, toggleDarkMode: mockToggleDarkMode }}
      >
        <DarkModeSwitch />
      </GlobalContext.Provider>
    );

    fireEvent.click(getByText("sun.svg"));

    expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
