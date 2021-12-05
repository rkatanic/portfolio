import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const GlobalContextProvider = (props: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <GlobalContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const useIsDarkMode = (): boolean => {
  const { isDarkMode } = useContext(GlobalContext);
  return isDarkMode;
};

const useToggleDarkMode = () => {
  const { toggleDarkMode } = useContext(GlobalContext);
  return toggleDarkMode;
};

export { GlobalContextProvider, useIsDarkMode, useToggleDarkMode };
