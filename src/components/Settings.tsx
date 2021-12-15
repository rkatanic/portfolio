import ColorSwitch from "./ColorSwitch";
import DarkModeSwitch from "./DarkModeSwitch";
import RowSwap from "./RowSwap";
import CurvedBorderSwitch from "./CurvedBordersSwitch";
import { GlobalContextProvider } from "../context/GlobalContext";

import "./Settings.css";

const Settings = (): JSX.Element => (
  <div className="settings">
    <GlobalContextProvider>
      <ColorSwitch />
      <DarkModeSwitch />
      <CurvedBorderSwitch />
      <RowSwap />
    </GlobalContextProvider>
  </div>
);

export default Settings;
