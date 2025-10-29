import React, { useState } from "react";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="h-16 py-2 px-3 flex justify-between items-center bg-white fixed z-50 optimumWidth shadow-xs shadow-neutral-400"
      id="navbar"
    >
      <div className="" id="logoSection">
        <a href="">
          <p className="text-left  font-extrabold text-neutral-700" id="logo">
            LABKWIP
          </p>
        </a>
      </div>
      {/* desktop */}
      <div
        className="hidden sm:flex gap-6 text-neutral-700 mr-16"
        id="sections"
      >
        <a
          href="#footer"
          className="hover:text-green-600 transition-all duration-300"
        >
          About
        </a>
        <a
          href="#services"
          className="hover:text-green-600 transition-all duration-300"
        >
          Services
        </a>
        <a
          href="#products"
          className="hover:text-green-600 transition-all duration-300"
        >
          Products
        </a>
        <a
          href="#contacts"
          className="hover:text-green-600 transition-all duration-300"
        >
          Contacts
        </a>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="menu"
          className="p-2 rounded-lg w-10 h-10 bg-green-600"
        >
          {!open && <img src={menu} alt="" className="w-full" />}
          {open && <img src={close} alt="" className="w-full" />}
        </button>
      </div>

      {open && (
        <div className="px-4 py-3 flex flex-col items-center gap-2 text-neutral-700 bg-neutral-50 w-full absolute top-16 left-0 rounded-b-2xl shadow-xs shadow-neutral-400">
          <a
            href="#footer"
            onClick={() => setOpen(false)}
            className="w-full text-center hover:text-green-600"
          >
            About
          </a>
          <a
            href="#services"
            className="w-full text-center hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#products"
            className="w-full text-center hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            Products
          </a>
          <a
            href="#contacts"
            className="w-full text-center hover:text-green-600"
            onClick={() => setOpen(false)}
          >
            Contacts
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
