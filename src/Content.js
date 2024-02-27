// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
import aboutUsImage from "./assets/images/AboutUs/aboutus.png";

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
 about:{
  image:aboutUsImage,
 },
  hero: {
    title: "Directeur 4C",
    firstName: "MOHAMED SAHBI",
    LastName: "NAKHLI",
    
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "d'expérience en 4C ISIGK",
      },
      {
        count: "40+",
        text: " Formation en 4c",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Adobe Premier",
        para: "Montage vidéo dynamique et professionnel avec Adobe Premiere",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Construction d'applications côté serveur avec Node.js",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Création de designs visuellement captivants avec Photoshop",
        logo: ps,
      },
      {
        name: "React js",
        para: "Développement d'applications web réactives avec React.js",
        logo: reactjs,
      },
      {
        name: "wordpress",
        para: "Développement de sites web personnalisés avec WordPress",
        logo: sketch,
      },
      {
        name: "Développement",
        para: "Développement d'applications web performantes et conviviales",
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
        title: "Digital Marketing",
        para: "Stratégies de marketing numérique personnalisées pour accroître la visibilité en ligne",
        logo: services_logo1,
      },
      {
        title: "Project Mangement",
        para: "Gestion efficace des projets de bout en bout",
        logo: services_logo2,
      },
      {
        title: "Développement",
        para: "Développement d'applications web et mobiles performantes ",
        logo: services_logo3,
      },
      {
        title: "Graphic Desing",
        para: "Conception créative et attrayante d'éléments visuels",
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
        title: "Inspired.Tn",
        image: project1,
      },
      {
        title: "Portfolio React",
        image: project2,
      },
      {
        title: "Crud App",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Ya3tikom essa7a, formation heyla, très enrichissante, avec une formatrice belha wassa3 => a good success recipe ! can't wait for the next challenge ! keep shining ”",
        img: avatar1,
        name: "Karim Dellagi",
      },
      {
        review:
          "“yaatikom saha nous sommes continuellement impressionnés par les résultats que vous réalisés !Merci d'apporter un sourire à tous les membres de l'équipe aamalna jaw w taalamna barsha 7ajet jdod ❤ Je vous remercie sincèrement💞💞”",
        img: avatar2,
        name: "Rihem Dahbi",
      },
      {
        review:
          "“Merci beaucoup Seifeddine Khorchef  pour  cette formation a vraiment répondu à mes attentes ....  formation tayra l équipe me7lehom  3malna jaw w t3alemna barcha 7ajet  ye3tik esa7a ♥️💯💯💯👏👏👏          ”",
        img: avatar3,
        name: "Rabiaa Abdaoui",
      },
      {
        review:
          "“disponibilité avant tout, formatrice plus que compétente ❤️ saif toujours présent pour tous les étudiants qui traîne un peux.  Je recommande vivement et fortement surtout pour le rapport QUALITÉ => Prix  bonne continuation pour toute l'équipe ❤️”",
        img: avatar4,
        name: "Ayman Brahmi",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Optimisez votre présence en ligne avec mes services de marketing numérique, gestion de projet, conception graphique et développement. Contactez-moi dès maintenant pour un succès assuré !",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "saifedinekhorchef123@gmail.com",
        icon: GrMail,
        link: "saifedinekhorchef123@gmail.com",
      },
      {
        text: "+216 28 679 178 ",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "seifeddine khorchef",
        icon: BsInstagram,
        link: "https://www.instagram.com/Seifeddine khorchef/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
