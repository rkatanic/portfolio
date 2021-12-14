import { fireEvent, render } from "@testing-library/react";
import {
  GlobalContextProvider,
  useHasCurvedBorders,
  useIsDarkMode,
  useIsRowSwap,
  useToggleCurvedBorders,
  useToggleDarkMode,
  useToggleRowSwap,
} from "../../context/GlobalContext";

describe("GlobalContext", (): void => {
  it("should provide isDarkMode from local storage", (): void => {
    Storage.prototype.getItem = jest.fn(() => "dark-mode");
    const TestComponent = (): JSX.Element => {
      const isDarkMode = useIsDarkMode();

      return <span>isDarkMode: {isDarkMode.toString()}</span>;
    };

    const { getByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(getByText("isDarkMode: false")).toBeInTheDocument();
  });

  it("should provide isDarkMode", (): void => {
    const TestComponent = (): JSX.Element => {
      const isDarkMode = useIsDarkMode();

      return <span>isDarkMode: {isDarkMode.toString()}</span>;
    };

    const { getByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(getByText("isDarkMode: true")).toBeInTheDocument();
  });

  it("should provide isRowSwap", (): void => {
    const TestComponent = (): JSX.Element => {
      const isRowSwap = useIsRowSwap();

      return <span>isRowSwap: {isRowSwap.toString()}</span>;
    };

    const { getByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(getByText("isRowSwap: false")).toBeInTheDocument();
  });

  it("should provide hasCurvedBorders", (): void => {
    const TestComponent = (): JSX.Element => {
      const hasCurvedBorders = useHasCurvedBorders();

      return <span>hasCurvedBorders: {hasCurvedBorders.toString()}</span>;
    };

    const { getByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(getByText("hasCurvedBorders: false")).toBeInTheDocument();
  });

  it("should provide toggleDarkMode", (): void => {
    const TestComponent = (): JSX.Element => {
      const isDarkMode = useIsDarkMode();
      const toggleDarkMode = useToggleDarkMode();

      return (
        <div>
          <button onClick={toggleDarkMode}>toggle dark mode</button>
          <span>dark mode: {isDarkMode.toString()}</span>
        </div>
      );
    };

    const { getByText, queryByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(queryByText("dark mode: true")).toBeInTheDocument();
    fireEvent.click(getByText("toggle dark mode"));

    expect(queryByText("dark mode: false")).toBeInTheDocument();
  });

  it("should provide toggleRowSwap", (): void => {
    const TestComponent = (): JSX.Element => {
      const isRowSwap = useIsRowSwap();
      const toggleRowSwap = useToggleRowSwap();

      return (
        <div>
          <button onClick={toggleRowSwap}>toggle row swap</button>
          <span>row swap: {isRowSwap.toString()}</span>
        </div>
      );
    };

    const { getByText, queryByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(queryByText("row swap: false")).toBeInTheDocument();
    fireEvent.click(getByText("toggle row swap"));

    expect(queryByText("row swap: true")).toBeInTheDocument();
  });

  it("should provide toggleCurvedBorders", (): void => {
    const TestComponent = (): JSX.Element => {
      const hasCurvedBorders = useHasCurvedBorders();
      const toggleCurvedBorders = useToggleCurvedBorders();

      return (
        <div>
          <button onClick={toggleCurvedBorders}>toggle curved borders</button>
          <span>curved borders: {hasCurvedBorders.toString()}</span>
        </div>
      );
    };

    const { getByText, queryByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(queryByText("curved borders: false")).toBeInTheDocument();
    fireEvent.click(getByText("toggle curved borders"));

    expect(queryByText("curved borders: true")).toBeInTheDocument();
  });
});
