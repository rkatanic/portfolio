import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const Scroll = (props: any) => {
  const options = {
    damping: 0.04,
  };
  // For newly opened link (e.g in new tab)
  const hash = window.location.hash;
  const scrollbar = Scrollbar.init(document.body, {
    continuousScrolling: false,
    alwaysShowTracks: true,
    plugins: {},
  });
  if (hash) {
    const target = document.getElementById(hash.substring(1));
    if (target) {
      scrollbar.scrollIntoView(target, {
        offsetTop: -scrollbar.containerEl.scrollTop,
      });
    }
  }

  // For opening link in the same page
  window.addEventListener(
    "hashchange",
    function () {
      const hash = window.location.hash;
      if (hash) {
        const target = document.getElementById(hash.substring(1));
        if (target) {
          scrollbar.scrollIntoView(target, {
            offsetTop: -scrollbar.containerEl.scrollTop,
          });
        }
      }
    },
    false
  );

  useEffect(() => {
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return props.children;
};

export default Scroll;
