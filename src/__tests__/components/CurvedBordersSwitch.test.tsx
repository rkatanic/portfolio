import { fireEvent, render } from "@testing-library/react";
import CurvedBorderSwitch from "../../components/CurvedBordersSwitch";
import { GlobalContext } from "../../context/GlobalContext";

describe("CurvedBordersSwitch", (): void => {
  it("should add curved borders class to body when curved borders feature is on", (): void => {
    Storage.prototype.setItem = jest.fn(() => {});
    jest.spyOn(document.body.classList, "add");

    const { container } = render(
      <GlobalContext.Provider
        value={{
          isDarkMode: false,
          isRowSwap: false,
          hasCurvedBorders: true,
          toggleDarkMode: jest.fn(),
          toggleCurvedBorders: jest.fn(),
          toggleRowSwap: jest.fn(),
        }}
      >
        <CurvedBorderSwitch />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      "curved-borders",
      "true"
    );
    expect(window.document.body.classList.add).toHaveBeenNthCalledWith(
      1,
      "curved-borders"
    );
    expect(container.querySelector(".icon-corner-sharp")).toBeInTheDocument();
  });

  it("should remove curved borders class to body when curved borders feature is off", (): void => {
    Storage.prototype.removeItem = jest.fn(() => {});
    jest.spyOn(document.body.classList, "remove");

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
        <CurvedBorderSwitch />
      </GlobalContext.Provider>
    );

    expect(window.localStorage.removeItem).toHaveBeenNthCalledWith(
      1,
      "curved-borders"
    );
    expect(window.document.body.classList.remove).toHaveBeenNthCalledWith(
      1,
      "curved-borders"
    );
    expect(getByText("corner-curved.svg")).toBeInTheDocument();
  });

  it("should handle curved borders toggle", (): void => {
    const mockToggleCurvedBorders = jest.fn();
    const { getByText } = render(
      <GlobalContext.Provider
        value={{
          isDarkMode: false,
          isRowSwap: false,
          hasCurvedBorders: false,
          toggleDarkMode: jest.fn(),
          toggleCurvedBorders: mockToggleCurvedBorders,
          toggleRowSwap: jest.fn(),
        }}
      >
        <CurvedBorderSwitch />
      </GlobalContext.Provider>
    );

    fireEvent.click(getByText("corner-curved.svg"));

    expect(mockToggleCurvedBorders).toHaveBeenCalledTimes(1);
  });
});
