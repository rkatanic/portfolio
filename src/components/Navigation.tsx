import { Suspense, useRef, useState } from "react";
import Scrollspy from "react-scrollspy";
import Settings from "./Settings";

import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import Shape from "./Shape";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const img1 = useRef<any>();

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  const handleLinkClick = (): void => {
    document.getElementById("content")?.classList.add("transition");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
      setShowMenu(false);
    }, 1500);
    setTimeout((): void => {
      document.getElementById("content")?.classList.remove("transition");
    }, 4000);
  };

  const handleImageShow = (e: any) => {
    img1.current.style.right = `${e.screenX}px`;
  };

  return (
    <nav className="nav">
      <div
        className={`nav-menu${showMenu ? " show-menu" : ""}`}
        data-testid="nav-menu"
      >
        <div className="grid-wrapper">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `txt-lg txt-outlined txt-800 nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleLinkClick}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `txt-lg txt-outlined txt-800 nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleLinkClick}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item" onMouseEnter={handleImageShow}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `txt-lg txt-outlined txt-800 nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
          <Canvas ref={img1} className="nav-item-shape">
            <Suspense fallback={null}>
              <Shape />
            </Suspense>
          </Canvas>
        </li>
      </div>
      <div
        className={`nav-toggle${showMenu ? " close" : ""}`}
        onClick={handleMenuToggle}
        data-testid="nav-toggle"
      >
        <Canvas className="nav-toggle-shape">
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </Canvas>
      </div>
    </nav>
  );
};

export default Navigation;
