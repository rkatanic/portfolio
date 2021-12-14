import { useIsRowSwap, useToggleRowSwap } from "../context/GlobalContext";
import { ReactComponent as RowSwapIcon } from "../assets/icons/row-swap.svg";
import { useEffect } from "react";

const RowSwap = (): JSX.Element => {
  const isRowSwap = useIsRowSwap();
  const toggleRowSwap = useToggleRowSwap();

  useEffect(() => {
    const shouldSwapRows = (): void => {
      if (isRowSwap) {
        window.document.body.classList.add("row-swap");
        window.localStorage.setItem("row-swap", "true");
      } else {
        window.document.body.classList.remove("row-swap");
        window.localStorage.removeItem("row-swap");
      }
    };

    shouldSwapRows();
  }, [isRowSwap]);

  return (
    <div
      id="row-swap-icon"
      className="footer-link-icon"
      onClick={toggleRowSwap}
    >
      <RowSwapIcon />
    </div>
  );
};

export default RowSwap;
