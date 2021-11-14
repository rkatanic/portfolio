import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const GlobalContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
    console.log(isDarkMode);
  };

  return (
    <GlobalContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const useIsDarkMode = () => {
  const { isDarkMode } = useContext(GlobalContext);
  return isDarkMode;
};

const useToggleDarkMode = () => {
  const { toggleDarkMode } = useContext(GlobalContext);
  return toggleDarkMode;
};

export { GlobalContextProvider, useIsDarkMode, useToggleDarkMode };
