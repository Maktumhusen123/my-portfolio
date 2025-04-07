import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 w-full z-50">
      <h1
        className="text-2xl font-bold text-blue-600 hover:text-blue-800 hover:scale-105 cursor-pointer"
        onClick={() =>
          window.open("https://www.youtube.com/@LearnwithMaktum", "_blank")
        }
      >
        Learn with Maktum 📺
      </h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="experience" smooth={true} duration={500} offset={-70}>
            Experience
          </Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
