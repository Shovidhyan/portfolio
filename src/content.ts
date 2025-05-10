

// import images
import Hero_person from "./assets/images/Hero/person.png";

import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import aws from "./assets/images/Skills/aws.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "MERN stack Developer",
    firstName: "Shovidhyan",
    LastName: "D",
    btnText: "Hire Me",
    image: Hero_person,
    link: "#contact",
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Expert in building interactive and dynamic web applications using React.js.",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Experienced in backend development, building REST APIs and handling server-side logic.",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Skilled in graphic design, photo editing, and UI/UX asset creation.",
        logo: ps,
      },
      {
        name: "MongoDB",
        para: "Proficient in NoSQL databases, managing data efficiently for scalable applications.",
        logo: mongodb,
      },
      {
        name: "AWS",
        para: "Hands-on experience with cloud computing, AWS services, and deployment strategies.",
        logo: aws,
      },
      {
        name: "Python",
        para: "Strong command over Python, including scripting, automation, and backend development.",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full-Stack Development",
        para: "Building real-world solutions using MERN stack, Python, and AI with a focus on smart mobility, accessibility, and sustainability.",
        logo: services_logo1,
      },
      {
        title: "Content Creation",
        para: "Crafting engaging technical content that simplifies complex concepts, empowers learners, and showcases real-world tech applications.",
        logo: services_logo2,
      },
      {
        title: "Python Development",
        para: "Developing robust backend systems, automation scripts, and AI-powered applications using Python to solve real-world challenges efficiently.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Cloud Kitchen website",
        image: project1,
        link: "https://github.com/Shovidhyan/laxnas-kitchen.git",
        liveLink: "https://laxnas-kitchen-frontend-project.onrender.com/"
      },
      {
        title: "Indian Sign Language Translator",
        image: project2,
        link: "https://github.com/Shovidhyan/Text-to-Speech.git",
        liveLink: "https://shovidhyan.github.io/Text-to-Speech/"
      },
      {
        title: "Task Master TO-DO List",
        image: project3,
        link: "https://github.com/Shovidhyan/Task-Master.git",
        liveLink: "https://shovidhyan.github.io/Task-Master/"
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In full-stack and AI development, I craft smart, real-world solutions — from real-time apps to intelligent systems — built to make an impact.",
    btnText: "Hire Me",
    link: "#contact",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shovidhyan77@gmail.com",
        icon: GrMail,
        link: "mailto:shovidhyan77@gmail.com",
      },
      {
        text: "+91 9344804104",
        icon: MdCall,
        link: "https://wa.me/9344804104",
      },
      {
        text: "shovidhyan_devaraj",
        icon: BsInstagram,
        link: "https://www.instagram.com/shovidhyan_devaraj/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
