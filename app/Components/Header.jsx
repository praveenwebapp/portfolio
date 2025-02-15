import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import bg1 from "../../assets/bg1.png";
// import resume from '../../public/Praveen Kumar Maddela _Resume.pdf'
import download from '../../assets/downloads.png'
import contact_arrow from '../../assets/mail.png'
import hello from '../../assets/hello.png'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={bg1} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo "
      >
        Hi! I am Praveen Kumar Maddela{" "}
        <Image src={hello} alt="" className=" w-6" />
      </motion.h3>
      <motion.h1   initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} 
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        {" "}
        Full Stack | Front End Developer based in Germany
      </motion.h1>
      <motion.p 
       initial={{  opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.6, delay: 0.7 }} className=" mx-w-2xl mx-auto font-Ovo">
        {" "}
        I am a Full-Stack Developer with Around 7 years of experience in front-end and back-end development, testing and
maintenance support, specializing in technologies like React.js, Next.js, AngularJS, Vue.js, Node.js, and Amazon
Web Services (AWS), JavaScript, Git, Jira, TypeScript among others
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }} 
          href="#Contact"
          className="px-10 py-3 border  border-white rounded-full  bg-orange-500 text-white  flex items-center gap-2 dark:bg-white dark:text-black
          "
        >
          Contact me <Image src={contact_arrow} alt="" className="w-4" />
        </motion.a>
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }} 
          href="/Praveen Kumar Maddela _Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my Resume <Image src={download} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
