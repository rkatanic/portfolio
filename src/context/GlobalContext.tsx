import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  isDarkMode: boolean;
  hasCurvedBorders: boolean;
  isRowSwap: boolean;
  toggleCurvedBorders: () => void;
  toggleDarkMode: () => void;
  toggleRowSwap: () => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  isDarkMode: true,
  hasCurvedBorders: false,
} as GlobalContextType);

const GlobalContextProvider = ({ children }: any): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.localStorage.getItem("dark-mode") ? false : true
  );
  const [hasCurvedBorders, setHasCurvedBorders] = useState(
    window.localStorage.getItem("curved-borders") ? true : false
  );
  const [isRowSwap, setIsRowSwap] = useState(
    window.localStorage.getItem("row-swap") ? true : false
  );

  const toggleDarkMode = (): void => {
    setIsDarkMode((prevState: boolean) => !prevState);
  };

  const toggleCurvedBorders = (): void => {
    setHasCurvedBorders((prevState: boolean) => !prevState);
  };

  const toggleRowSwap = (): void => {
    setIsRowSwap((prevState: boolean) => !prevState);
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        hasCurvedBorders,
        isRowSwap,
        toggleDarkMode,
        toggleCurvedBorders,
        toggleRowSwap,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useIsDarkMode = (): boolean => {
  const { isDarkMode } = useContext(GlobalContext);
  return isDarkMode;
};

const useHasCurvedBorders = (): boolean => {
  const { hasCurvedBorders } = useContext(GlobalContext);
  return hasCurvedBorders;
};

const useIsRowSwap = (): boolean => {
  const { isRowSwap } = useContext(GlobalContext);
  return isRowSwap;
};

const useToggleDarkMode = (): (() => void) => {
  const { toggleDarkMode } = useContext(GlobalContext);
  return toggleDarkMode;
};

const useToggleCurvedBorders = (): (() => void) => {
  const { toggleCurvedBorders } = useContext(GlobalContext);
  return toggleCurvedBorders;
};

const useToggleRowSwap = (): (() => void) => {
  const { toggleRowSwap } = useContext(GlobalContext);
  return toggleRowSwap;
};

export {
  GlobalContextProvider,
  useIsDarkMode,
  useHasCurvedBorders,
  useIsRowSwap,
  useToggleDarkMode,
  useToggleCurvedBorders,
  useToggleRowSwap,
};
