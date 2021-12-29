import { useEffect, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Scroll = (props: any) => {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const scrollContainer = useRef<any>();

  // Configs
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data!.current = window.scrollY;
    // Set Previous to the scroll previous position
    data!.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data!.rounded = Math.round(data.previous * 100) / 100;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer && scrollContainer.current)
      scrollContainer!.current!.style!.transform = `translate3d(0, -${data.rounded}px, 0)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={scrollContainer} className="scroll">
      <div className="main">{props.children}</div>
    </div>
  );
};

export default Scroll;
