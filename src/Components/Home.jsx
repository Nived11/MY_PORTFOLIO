import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from "../assets/profilee.png";
import { motion } from "framer-motion";
import {SiMongodb, SiExpress, SiReact, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, 
        SiGit, SiGithub, SiNodedotjs, SiAwsamplify,SiMui} from "react-icons/si";
import ecom from "../assets/ecom.jpg";
import "./Home.css";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
};
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'nived11', 
        'template_z2m5b7f', 
        e.target, 
        '156D1ZevOJfFfZN3H'
    ).then(
        (result) => {
          toast.success('mail sent successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }, 
        (error) => {
          toast.info('something went wrong !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
        }
    );

    e.target.reset();
};
  
 

  const skills = [
    { name: "HTML5", icon: <SiHtml5 size={30} color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 size={30} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952B3" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
    { name: "Express", icon: <SiExpress size={40} color="#fffff" /> },
    { name: "React", icon: <SiReact size={40} color="#61DAFB" /> },
    { name: "NodeJS", icon: <SiNodedotjs  size={40} color="#68A063" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
    { name: "Material UI", icon: <SiMui size={30} color="#007FFF" /> },
    { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={40} color="#fffff" /> },
    { name: "AWS", icon: <SiAwsamplify size={40} color="#FF9900" /> }
  ];

  return (
    <div className="portfolio">
      //Navigation
      <motion.nav className="navbar" 
        initial={{ y: -100, opacity: 0, scaleY: 0.8 }}
        animate={{ y:-20, opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}>
        <motion.div className="logo"  initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}>
          <h1>NIVED</h1>
        </motion.div>
        <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <ScrollLink to="home" smooth={true} duration={600} onClick={handleLinkClick}>
              <li>Home</li>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={600} offset={-80} onClick={handleLinkClick}>
              <li>About</li>
            </ScrollLink>
            <ScrollLink to="project" smooth={true} duration={600} offset={-80} onClick={handleLinkClick}>
              <li>Projects</li>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={600} offset={-80} onClick={handleLinkClick}>
              <li>Contact</li>
            </ScrollLink>
          </ul>
        </div>
        <div className="menuicon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </div>
      </motion.nav>

      // Home Section

      <div className="section1" id="home" >
        <div className="s1-lft">
          <div className="s1-det">
            <motion.h1>Hii,</motion.h1>
            <motion.h1>I'm Nived</motion.h1>
            <motion.h3>MERN STACK DEVELOPER</motion.h3>
          </div>
        </div>
        <div className="s1-rgt">
          <div className="profile">
            <img src={profile} alt="Nived - MERN Stack Developer" />
          </div>
        </div>
      </div>

      // About Section

      <div className="section2" id="about">
        <motion.div className="s2head" initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}  >
          <h1>About Me</h1>
        </motion.div>
        <motion.div className="s2cont" initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }} >
          <p>
            Hi! I'm Nived, a passionate MERN Stack Developer with a strong foundation in HTML, CSS, JavaScript, 
            React, Node.js, Express, and MongoDB. I enjoy building dynamic, user-friendly web applications 
            that solve real-world problems.
            
            With experience in front-end and back-end development, I create scalable and efficient solutions. 
            I focus on writing clean code and delivering seamless user experiences. My front-end expertise in 
            React allows me to build responsive interfaces, while my back-end knowledge enables me to handle 
            data and server-side logic effectively.
            
            I'm constantly learning new technologies to stay ahead in the fast-evolving field of web development. 
            My goal is to become a full-stack developer and work on innovative projects that have a positive impact. 
            I value collaboration, problem-solving, and strive to improve my skills with every project I take on.
          </p>
        </motion.div>
        <div className="s2skillhead">
          <motion.h3 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}>SKILLS</motion.h3>
        </div>
        <div className="s2skill">
        {skills.map((skill, index) => (
            <motion.div key={index} className="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.10 }}>
              {skill.icon}
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
          
        </div>
      </div>

      // Projects Section

      <div className="section3" id="project">
        <div className="s3head">
          <h1>Projects</h1>
        </div>

          // Project 1

        <motion.div className="projectdiv"
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
         transition={{ duration: 1 }}
         viewport={{ once: false, amount: 0.5 }} >
          <div className="s3projimg">
            <img src={ecom} alt="E-commerce Project" loading='lazy'/>
          </div>
          <div className="s3projdetdiv">
            <div className="projname">
              <h1>E-commerce</h1>
            </div>
            <div className="projdet">
              <p>A full-stack e-commerce platform built with the MERN stack. Features include user authentication,
                 product catalog, shopping cart, payment integration, and order management. Implements responsive
                 design and modern UI/UX principles.</p>
            </div>
          </div>
        </motion.div>
      
          // Project 2

        <motion.div className="projectdiv" 
       initial={{ opacity: 0, transform: "translateX(-100px)" }}
       whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }} >
          <div className="s3projdetdiv">
            <div className="projname">
              <h1>Task Manager</h1>
            </div>
            <div className="projdet">
              <p>A comprehensive task management application built with React and Node.js. Features include 
                 task creation, categorization, deadline setting, and progress tracking. Implements real-time 
                 updates and collaborative features.</p>
            </div>
          </div>
          <div className="s3projimg">
            <img src={ecom} alt="Task Manager Project" loading='lazy' />
          </div>
        </motion.div>
        
          // Project 3

        <motion.div className="projectdiv"
         initial={{ opacity: 0, transform: "translateX(-100px)" }}
         whileInView={{ opacity: 1, transform: "translateX(0)" }}
         transition={{ duration: 1 }}
         viewport={{ once: false, amount: 0.5 }}>
          <div className="s3projimg">
            <img src={ecom} alt="Blog Platform Project" loading='lazy' />
          </div>
          <div className="s3projdetdiv">
            <div className="projname">
              <h1>Blog Platform</h1>
            </div>
            <div className="projdet">
              <p>A modern blogging platform with React frontend and Node.js backend. Features include user 
                 authentication, rich text editing, comment system, and social sharing. Implements SEO best 
                 practices and performance optimization.</p>
            </div>
          </div>
        </motion.div>
      </div>

      // Contact Section

      <div className="section4" id="contact">
        <div className="contact-header">
          <h1>Get In Touch</h1>
        </div>
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={sendEmail}>
              <h2>Contact Me</h2>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name='message' placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="social-links">
              <h2>Connect With Me</h2>
              <a  href="https://github.com/Nived11"  target="_blank"  rel="noopener noreferrer"  className="social-link" >
                <FaGithub className="social-icon" />
                <span>Github</span>
              </a>
              <a  href="https://linkedin.com/in/nived11"  target="_blank"  rel="noopener noreferrer"  className="social-link" >
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a  href="mailto:your.nived4148@gmail.com"  className="social-link" >
                <FaEnvelope className="social-icon" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;