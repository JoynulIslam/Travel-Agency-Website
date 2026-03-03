import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Navbarmenus from "./Navbarmenus/Navbarmenus";
import Toggle from "../Buttons/Toggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between relative z-2 w-full h-22 items-center px-4 bg-black">
          <Logo />
          <Navbarmenus menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Toggle toggleMenu={toggleMenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
