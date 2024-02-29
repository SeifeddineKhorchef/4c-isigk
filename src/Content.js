// import images
import Hero_person from "./assets/images/Hero/person.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.jpg";
import project2 from "./assets/images/Projects/img2.jpg";
import project3 from "./assets/images/Projects/img3.jpg";
import project4 from "./assets/images/Projects/img4.jpg";
import project5 from "./assets/images/Projects/img5.jpg";
import project6 from "./assets/images/Projects/img6.jpg";
import project8 from "./assets/images/Projects/img8.jpg";
import project9 from "./assets/images/Projects/img9.jpg";
import project10 from "./assets/images/Projects/img10.jpg";
import project11 from "./assets/images/Projects/img11.jpg";
import person_project from "./assets/images/Projects/person.png";

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
 
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Hard Skills",
        para: " Nos services de développement des compétences techniques offrent des programmes structurés pour acquérir des aptitudes spécifiques nécessaires dans le monde professionnel",
        logo: services_logo1,
      },
      {
        title: "Soft Skills",
        para: " Optez pour nos services de renforcement des compétences comportementales pour améliorer votre communication, votre travail d'équipe et votre capacité d'adaptation. ",
        logo: services_logo2,
      },
      {
        title: "Organisation d'Événements",
        para: " Confiez-nous l'organisation de vos événements professionnels. Que ce soit des conférences, des séminaires, des ateliers ou des réunions sociales, nous prenons en charge tous les détails logistiques pour créer des expériences mémorables. ",
        logo: services_logo3,
      },
      {
        title: " Formation et de Cours ",
        para: " Explorez nos services de formation et de cours pour acquérir des connaissances approfondies dans des domaines spécifiques. Que ce soit à travers des cours en personne, des formations en ligne interactives ou des ateliers pratiques",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Nos événements",
    image: person_project,
    project_content: [
      {
        title: "Formation Design thinking",
        image: project1,
      },
      {
        title: "Confiance en soi",
        image: project2,
      },
      {
        title: "Introduction PowerBi",
        image: project3,
      },
      {
        title: "Self Marketing",
        image: project4,
      },
      {
        title: "Métodologie de conception",
        image: project5,
      },
      {
        title: "Comptable face a la digitalisation",
        image: project6,
      },
     
      {
        title: "Be a good presenter",
        image: project8,
      },
      {
        title: "Job interview simulation",
        image: project9,
      },
      {
        title: "Latex",
        image: project10,
      },
      {
        title: "initiation à la creativité",
        image: project11,
      },
    ],
  },

  Hireme: {
    title: "Quote for you",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts.",
  },
  Contact: {
    title: "Contacter nous",
   
    social_media: [
      {
        text: "sahbinakhli@yahoo.fr",
        icon: GrMail,
        link: "saifedinekhorchef123@gmail.com",
      },
      {
        text: "+216 55 484 255 ",
        icon: MdCall,
        link: "",
      },
    
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
