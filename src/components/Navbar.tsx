import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

// import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import SoMe from "./SoMe";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function clickLink() {
    setTimeout(() => {
      closeMenu();
    }, 200); // Replace 1000 with the number of milliseconds you want to wait
  }

  return (
    <>
      <nav className="fixed h-24 p-4 sm:px-6 flex justify-between w-full bg-white">
        <div className="flex">
          <Link to="home" smooth={true} duration={800} offset={-100}>
            <img
              // src={logo}
              alt="logo"
              className="w-16 hover:scale-105 hover:cursor-pointer transition-transform"
            />
          </Link>
          <h1 className="pt-3.5 px-4 hidden lg:flex">My Template</h1>
        </div>
        <div className="hidden sm:flex gap-8 p-4 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-100}
            className="navLink"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-100}
            className="navLink"
          >
            About
          </Link>
          <Link
            to="music"
            smooth={true}
            duration={800}
            offset={-100}
            className="navLink"
          >
            Music
          </Link>
          <Link
            to="calendar"
            smooth={true}
            duration={800}
            offset={-100}
            className="navLink"
          >
            Calendar
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={800}
            offset={-100}
            className="navLink"
          >
            Contact
          </Link>
        </div>
        <div className="sm:hidden pt-2" onClick={() => setIsMenuOpen(true)}>
          <Menu size={50} />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed sm:hidden top-0 left-0 w-screen h-screen bg-primary">
          {/* logo and cross */}
          <div className="h-24 p-4 flex justify-between w-full">
            <img alt="logo" src="" className="w-16" /> {/* src={logo} */}
            <div className="flex justify-end pt-2">
              <X size={50} className="stroke-white" onClick={closeMenu} />
            </div>
          </div>

          {/* menu on mobile */}
          <div className="p-6 pt-0">
            <ul className="text-5xl text-white grid gap-3">
              <Link
                to="home"
                offset={-100}
                className="hover:underline"
                onClick={clickLink}
              >
                Home
              </Link>
              <Link
                to="about"
                offset={-100}
                className="hover:underline"
                onClick={clickLink}
              >
                About
              </Link>
              <Link
                to="music"
                offset={-100}
                className="hover:underline"
                onClick={clickLink}
              >
                Music
              </Link>
              <Link
                to="calendar"
                offset={-100}
                className="hover:underline"
                onClick={clickLink}
              >
                Calendar
              </Link>
              <Link
                to="footer"
                offset={-100}
                className="hover:underline"
                onClick={clickLink}
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="absolute bottom-4 w-full px-8">
            <div className="flex justify-between gap-4">
              <SoMe face={true} size={50} />
              <SoMe insta={true} size={50} />
              <SoMe yt={true} size={50} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
