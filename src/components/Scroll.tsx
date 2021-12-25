import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import useWindowSize from "../hooks/useWindowSize";

const Scroll = (props: any) => {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef<any>();

  // Configs
  const data = {
    ease: 0.025,
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

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 5;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer && scrollContainer.current) {
      scrollContainer!.current!.style!.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    }
  };
  return (
    <div ref={scrollContainer} className="scroll">
      <div className="main">{props.children}</div>
    </div>
  );
};

export default Scroll;
