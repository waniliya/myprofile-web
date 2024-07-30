import React, {useEffect } from "react";
import './App.css';
import Info from './component/info/Info.js';
import Edu from './component/education/Edu.js';
import Skill from './component/skill/Skill.js';
import Exp from './component/exp/Exp.js';
import Project from './component/project/Project.js';
import Gallery from "./component/gallery/Gallery.js";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useDarkMode } from './DarkModeContext';



function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    
    <div className="App">
      
      <header className="App-header">
      
        <div className="NavBar">
            <nav>
                <ul>
                    <li>
                        <a href="#sec1">Home</a>
                    </li>
                    <li>
                        <a href="#sec2">Education</a>
                    </li>
                    <li>
                        <a href="#sec3">Skills</a>
                    </li>
                    <li>
                        <a href="#sec4">Experiences</a>
                    </li>
                    <li>
                        <a href="#sec5">Project</a>
                    </li>
                    <li>
                        <a href="#sec6">Gallery</a>
                    </li>

                </ul>
               
            </nav>
           
            
        </div>
        
        <div className=" position-fixed top-50 end-0 translate-middle-y">
            <p className="darkmode text-start opacity-75">Need dark mode?</p>
            <input type="checkbox" class="theme-checkbox "onClick={toggleDarkMode}></input>
            </div>

      </header>
      
      <section id="sec1"><Info/></section>
      <section data-aos="fade-up" id="sec2"><Edu/></section>
      <section data-aos="fade-up" id="sec3"><Skill/></section>
      <section data-aos="fade-up" id="sec4"><Exp/></section>
      <section data-aos="fade-up" id="sec5"><Project/></section>
      <section data-aos="fade-up" id="sec6"><Gallery/></section>
      
      
      <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'><a className='nav-link px-2 text-muted' href="#sec1">Back To Info</a></li>
          <li className='nav-item'><a className='nav-link px-2 text-muted' href="https://github.com/waniliya">GitHub</a></li>
          <li className='nav-item'><a className='nav-link px-2 text-muted' href = "mailto: waniliya8@gmail.com">Contact Me</a></li>
        </ul>
        <p className='text-center text-muted'>© 2024 waniliya8@gmail.com</p>
      </footer>
      </div>
      
    </div>

   
  );
}

export default App;
