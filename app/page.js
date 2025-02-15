'use client'
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode ,setIsDarkMode] = useState(false)
  useEffect(()=>{
    
    if(localStorage.theme==='dark'|| (!('theme' in localStorage) || window.matchMedia('(prefersc-color-scheme:dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)

    }

  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme=''



    }

  },[isDarkMode])
  return (
   <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
   <Header  isDarkMode={isDarkMode}/>
   <About  isDarkMode={isDarkMode}/>
   <Services  isDarkMode={isDarkMode}/>
   <Work  isDarkMode={isDarkMode}/>
   <Contact  isDarkMode={isDarkMode}/>
   <Footer  isDarkMode={isDarkMode}/>
   </>
  );
}
