import React, { useEffect, useRef, useState } from "react";
import bg1 from "../../assets/bg1.png";
import navbg from "../../assets/navbg2.jpeg";
import Image from "next/image";
import bright from '../../assets/crescent-moon.png'
import dark from '../../assets/dar_moon.png'
import namewhiteng from '../../assets/namewhitebg.png'
import nameblackbg from '../../assets/namebgblack.png' 
import bgcolor from '../../public/bgcolor.jpeg'
import namelogofordark from '../../assets/namelogofordark.png'
import namelogoforbright from '../../assets/namelogoforbright.png'
import contactme from '../../assets/right-arrowwhite.png'
import contactmee from '../../assets/mail.png'



const Navbar = ({isDarkMode , setIsDarkMode}) => {
  const [isScroll, setisScroll] = useState(false);

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  
  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%] dark:hidden">
        {/* <Image src={''} alt="" className="w-full" /> */}
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" :""}`}>
        <a href="#top">
          {/* <Image  src={isDarkMode ? namelogofordark:namelogoforbright} title={'praveen'} alt='Praveen' className='w-44 cursor-pointer  mr-14'  /> */}
          <h1 className="w-28  cursor-pointer mr-14 text-2xl
          ">Praveen...</h1>
        </a>
    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" :"bg-white shadow-sm bg-opacity-50 dark: border dark:border-white/50 dark:bg-transparent" } `}>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#About">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#Contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={()=>setIsDarkMode(prev=>!prev)}>
            <Image src={ isDarkMode ? bright :dark} alt="" className="w-6" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            href="#Contact"
          >
            Contact
            {/* <Image src={isDarkMode? navbg: bg1} className="w-3" alt="" /> */}
            <Image src={isDarkMode?contactmee:contactme} className="w-3" alt="" />

          </a>
          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image src={isDarkMode? navbg : bg1} alt="" className="w-6" />
          </button>
          {/* { mobile menu } */}

          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:"
          >
            <div onClick={closeMenu} className="absolute right-6 top-6">
              <Image src={isDarkMode?navbg:bg1} alt="" className="w-5 cursor-pointer " />
            </div>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#top">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#About">
                About Me
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#Services">
                Services
              </a>
            </li>
            <li>
              <a onClick={closeMenu} className="font-Ovo" href="#work">
                My Work
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#Contact" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
