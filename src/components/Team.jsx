import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import seif from "../assets/images/Team/seif.png"
import baha from "../assets/images/Team/baha.png"
import hiba from "../assets/images/Team/hiba.png"
import hibay from "../assets/images/Team/hibay.png"
import houssem from "../assets/images/Team/houssem.png"
import iyed from "../assets/images/Team/iyed.png"
import Khouloud from "../assets/images/Team/khouloud.png"
import islem from "../assets/images/Team/islem.png"
import hd from "../assets/images/Team/hd.png"
import hedyr from "../assets/images/Team/hedyr.png"
import omeyma from "../assets/images/Team/omeyma.png"
import skander from "../assets/images/Team/skander.png"
import eya from "../assets/images/Team/eya.png"
import taysir from "../assets/images/Team/taysir.png"
import ranim from "../assets/images/Team/ranim.png"


SwiperCore.use([Navigation, Pagination, Autoplay]);

const Team = () => {
  const teamMembers = [
    {
      name: "Khorchef Seifeddine",
      position: "Ambassador ",
      image: seif, // Update with your actual image path
    },
    {
      name: "Baha Haddad",
      position: "ambassadeur",
     
      image: baha, // Update with your actual image path
    },
    {
      name: "Hiba bouallagui",
      position: "Ambassadrice",
      image: hiba, // Update with your actual image path
    },
    {
      name: "Hibabelhadj youssef",
      position: "Ambassadrice",
      image: hibay, // Update with your actual image path
    },
    {
      name: "Houssem boukhil",
      position: "Ambassadeur",
      
      image: houssem, // Update with your actual image path
    },
    {
      name: "Iyed Dakhlaoui",
      position: "Ambassadeur",
      image: iyed, // Update with your actual image path
    },
    {
      name: "Khouloud ayachi",
      position: "Ambassadrice",
      bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: Khouloud, // Update with your actual image path
    },
    {
      name: "Skander Hani",
      position: "Ambassadeur",
      image: skander, // Update with your actual image path
    },
    {
        name: "Ranim Mechi",
        position: "Ambassadeur",
        image: ranim, // Update with your actual image path
      },
      {
        name: "oumaima hd",
        position: "Ambassadeur",
        image: hd, // Update with your actual image path
      },
      {
        name: "oumaima ",
        position: "Ambassadeur",
        image:omeyma, // Update with your actual image path
      },
      {
        name: "hedyr bel arbi ",
        position: "Ambassadeur",
        image:hedyr, // Update with your actual image path
      },
      {
        name: "islem ayachi",
        position: "Ambassadeur",
        image: islem, // Update with your actual image path
      },
     
      {
        name: "Eya rebhy",
        position: "Ambassadeur",
        image: eya, // Update with your actual image path
      },
      {
        name: "Hl taysir",
        position: "Ambassadeur",
        image: taysir, // Update with your actual image path
      },
  ];

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 992) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial setup
    updateSlidesPerView();

    // Update on window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);


  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 ">
        <h2 className="text-5xl font-Inria font-bold mb-8">L'equipe</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-[#253D57] mb-2">{member.name}</h3>
                <p className="text-gray mb-2">{member.position}</p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
