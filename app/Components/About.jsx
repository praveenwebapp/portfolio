import React from "react";
import bg1 from "../../assets/bg1.png";
import navbg from "../../assets/navbg2.jpeg";
import { motion } from "motion/react";
import myimage1 from "../../assets/myimage1.jpeg";
import mybgnew from "../../assets/mybgnew.jpeg";

import Image from "next/image";
import { infoList, toolsData } from "@/public/assets";

const About = ({ isDarkMode }) => {
  console.log("infoList", infoList);
  return (
    <motion.div
      id="About"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        nitial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>
      <motion.div
        nitial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 my-15"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={mybgnew}
            alt=""
            className="w-full rounded-3xl items-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex-1 w-full"
        >
          <p className="mb font-Ovo">
            Hi, I’m Praveen Kumar Maddela — a passionate Full Stack Web
            Developer with over 7 years of experience building dynamic,
            user-friendly web applications. I come from an engineering
            background with a Bachelor’s degree in Electronics and Communication
            (B.Tech in ECE), which has given me a solid foundation in both
            problem-solving and technical thinking. Over the years, I’ve worked
            across the full development stack, focusing more on the frontend
            with technologies like React.js, AngularJS, and React Native for
            mobile apps, while also building scalable backends using Node.js,
            Express.js, and MongoDB. I write clean, testable code using
            TypeScript and JavaScript, and I’m well-versed in automation testing
            with Jest and Cypress. I follow Scrum methodologies and have a
            working knowledge of Azure & AWS fundamentals. When it comes to
            deployment, I’ve used platforms like Vercel, Netlify, and GitHub
            Pages to ship production-ready apps. I love exploring new tools,
            staying updated with the latest best practices, and collaborating
            with teams to build maintainable, high-quality products. Whether
            it’s designing smooth user experiences or optimizing performance
            behind the scenes, I’m always excited to take on meaningful projects
            and keep growing as a developer.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image className=" w-7 mt-3 " src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white ">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-grey-700 font-Ovo "
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
