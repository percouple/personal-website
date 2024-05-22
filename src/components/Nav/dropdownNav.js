import React, { useEffect, useState } from "react";
import "../../styles/dropdownNav.css";
import NavStack from "../../data/icons/NavStack.svg";
import SocialLinks from "../SocialLinks";

export default function NavBar() {
  let [navOpen, setNavOpen] = useState(false);

  const outsideClickHandler = (e) => {
    e.stopPropagation();
    console.log(e.target.id);
    if (
      e.target.id !== "dropdownButton" &&
      e.target.id !== "dropdownContentButton"
    ) {
      setNavOpen(false);
    }
  };

  // Set up outside click listener on mount
  useEffect(() => {
    document.addEventListener("click", outsideClickHandler);
  }, []);

  // Function to scroll window to navbar sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    console.log(navOpen);
  }, [navOpen]);

  return (
    <div className="navBar">
      <SocialLinks style={{ border: "20px solid white" }} />
      <div className="dropdown">
        <button
          src={NavStack}
          onClick={() => setNavOpen(!navOpen)}
          id="dropdownButton"
          className="dropdown-button"
        ></button>
        <div className={`dropdown-content ${navOpen ? "active" : ""}`}>
          <div
          id="dropdownContentButton"
            className="dropdown-content-button"
            onClick={() => scrollToSection("about")}
          >
            About
          </div>
          <div
            className="dropdown-content-button"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </div>
          <div
            className="dropdown-content-button"
            onClick={() => scrollToSection("connect")}
          >
            Connect
          </div>
          <div
            className="dropdown-content-button"
            onClick={() => scrollToSection("home")}
          >
            Top
          </div>
        </div>
      </div>
    </div>
  );
}
