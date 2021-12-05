import { useState } from "react";

import "./ProgressBar.css";

const ProgressBar = (): JSX.Element => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div className="progress-bar">
      <div className="progress-bar-pulse"></div>
      <div
        className="progress-bar-percent"
        style={{ height: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
