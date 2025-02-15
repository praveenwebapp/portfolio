import Image from "next/image";
import React from "react";
import bg1 from "../../assets/bg1.png";
import navbg from "../../assets/navbg.jpeg";
import namelogofordark from '../../assets/namelogofordark.png'
import namelogoforbright from '../../assets/namelogoforbright.png'
import emailg from '../../assets/emailg.png'
import emailiconfordark from '../../assets/emailiconfordark.png'



const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? namelogofordark:namelogoforbright} alt="" className="w-36 mx-auto mb-2 " />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? emailg : emailg} alt="" className="w-6 " />
          praveenwebapp@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Praveen. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {/* <li>
            <a target="_blank" href="ourinsta link">
              Github
            </a>
          </li> */}
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/praveen-kumar-maddela-645a1a146/">
              {" "}
              linked In
            </a>
          </li>
          {/* <li>
            <a target="_blank" href="ourinsta link">
              Twitter
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
