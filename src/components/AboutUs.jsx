import React from "react";
import { content } from "../Content";

const AboutUs = () => {
    const {about}=content
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16">
        <h2 className="text-5xl font-Inria font-bold mb-8 text-center">Les Centres de Carrières et de Certification des Compétences isigk </h2>

        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <p className="text-[#253D57] font-Paprika text-lg leading-8 mb-4">
            Explorez le monde passionnant de l'entrepreneuriat et perfectionnez vos compétences en communication et en soft skills. Notre programme offre une immersion complète dans l'univers entrepreneurial, mettant l'accent sur la création d'entreprises innovantes. Vous développerez également des compétences essentielles telles que la communication efficace, la pensée critique et la gestion du temps. Préparez-vous à exceller dans le monde professionnel en acquérant des compétences pratiques et une compréhension approfondie de la communication stratégique, du leadership et de la collaboration.
            </p>
            <p className="text-[#253D57] font-Paprika text-lg leading-8 mb-4">
              
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={about.image}
              alt="About Us"
              className="w-full h-auto rounded-lg scale-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
