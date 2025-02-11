import "./Home.css"
import React from "react"
import { Link as ScrollLink } from 'react-scroll'; 
import profile from "../assets/profile-portfolio.png"
import ecom from "../assets/ecom.jpg"
function Home(){
    return(
        <div className="portfolio">
        <nav>
          <div className="logo">
            <h1>Nived</h1>
          </div>
          <div className="menu">
            <ul>
            <ScrollLink to="home" smooth={true} duration={500} ><li>Home</li></ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-80}> <li>About</li></ScrollLink>
            <ScrollLink to="project" smooth={true} duration={500} offset={-80}> <li>Projects</li></ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80}> <li>Contact</li></ScrollLink>
            </ul>
          </div>
          <div className="menuicon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </div>
        </nav>
        <div className="section1" id="home">
         <div className="s1-lft">
          <div className="s1-det">
            <h1>Hii,</h1>
            <h1>I'm Nived</h1>
            <h3>MERN STACK DEVELOPER</h3>
          </div>
         </div>
         <div className="s1-rgt">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
         </div>
        </div>
        <div className="section2" id="about">
          <div className="s2head">
            <h1>About Me</h1>
          </div>
          <div className="s2cont">
            <p>Hi! I'm Nived, a passionate MERN Stack Developer with a strong foundation in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I enjoy building dynamic, user-friendly web applications that solve real-world problems.
              With experience in front-end and back-end development, I create scalable and efficient solutions. I focus on writing clean code and delivering seamless user experiences. My front-end expertise in React allows me to build responsive interfaces, while my back-end knowledge enables me to handle data and server-side logic effectively.
              I'm constantly learning new technologies to stay ahead in the fast-evolving field of web development. My goal is to become a full-stack developer and work on innovative projects that have a positive impact. I value collaboration, problem-solving, and strive to improve my skills with every project I take on.
              I'm excited about the future and look forward to making meaningful contributions to the tech world.
            </p>
          </div>
          <div className="s2skillhead">
            <h3>SKILLS</h3>
          </div>
          <div className="s2skill">
           <div className="skills">Postman</div>
           <div className="skills">Mongodb</div>
           <div className="skills">react</div>
           <div className="skills">express</div>
           <div className="skills">nodejs</div>
           <div className="skills">javascript</div>
           <div className="skills">html</div>
           <div className="skills">css</div>
           <div className="skills">bootstrap</div>
           <div className="skills">tailwind</div>
           <div className="skills">git</div>
           <div className="skills">github</div>
           <div className="skills">aws</div>
           <div className="skills">material ui</div>
          </div>
        </div>

        <div className="section3" id="project">
          <div className="s3head">
            <h1>Projects</h1>
          </div>
          <div className="projectdiv"> 
            <div className="s3projimg">
              <img src={ecom} alt="" />
            </div>
            <div className="s3projdetdiv">
              <div className="projname">
                <h1>E-commerce</h1>
              </div>
              <div className="projdet">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim ut nisi, ea dolorum tenetur quis accusamus incidunt atque neque temporibus minus esse quo? Soluta provident ut velit ipsam tempore.</p> 
              </div>
            </div>
          </div>
          <div className="projectdiv"> 
          <div className="s3projdetdiv">
              <div className="projname">
                <h1>E-commerce</h1>
              </div>
              <div className="projdet">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim ut nisi, ea dolorum tenetur quis accusamus incidunt atque neque temporibus minus esse quo? Soluta provident ut velit ipsam tempore.</p> 
              </div>
            </div>
            <div className="s3projimg">
              <img src={ecom} alt="" />
            </div>
          </div>
          <div className="projectdiv"> 
            <div className="s3projimg">
              <img src={ecom} alt="" />
            </div>
            <div className="s3projdetdiv">
              <div className="projname">
                <h1>E-commerce</h1>
              </div>
              <div className="projdet">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim ut nisi, ea dolorum tenetur quis accusamus incidunt atque neque temporibus minus esse quo? Soluta provident ut velit ipsam tempore.</p> 
              </div>
            </div>
          </div>
        </div>

        <div className="section4" id="contact"></div>

      </div>
    )
}

export default Home