import { useEffect, useRef } from "react";
import "./Cursor.css";
const Cursor = () => {
  const dot = useRef<any>();
  const dotOutline = useRef<any>();
  const delay = 4;
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const endx = useRef(window.innerWidth / 2);
  const endy = useRef(window.innerHeight / 2);
  const _X = useRef(0);
  const _Y = useRef(0);
  const requestRef = useRef<any>(null);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate( -50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate( -50%, -50%) scale(1.5);";
    } else {
      dot.current.style.transform = "translate( -50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate( -50%, -50%) scale(1) ";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const mouseoutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e: any) => {
    endx.current = e.pageX;
    endy.current = e.pageY;
    dot.current.style.top = endy.current + "px";
    dot.current.style.left = endx.current + "px";
  };

  const animateDotOutline = () => {
    _X.current += (endx.current - _X.current) / delay;
    _Y.current += (endy.current - _Y.current) / delay;
    dotOutline.current.style.top = _Y.current + "px";
    dotOutline.current.style.left = _X.current + "px";
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseoutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    animateDotOutline();
    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseoutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
