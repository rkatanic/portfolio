import { useState } from "react";

import "./ProgressBar.css";

const ProgressBar = (): JSX.Element => {
  const [scroll, setScroll] = useState(0);

  const onScroll = (): void => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
    setScroll(scrollPercent);
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
