import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import your images
import image1 from "../assets/images/gallery/image1.jpg";
import image2 from "../assets/images/gallery/image2.jpg";
import image3 from "../assets/images/gallery/image3.jpg";
import image4 from "../assets/images/gallery/image4.jpg";
import image5 from "../assets/images/gallery/image5.jpg";
import image6 from "../assets/images/gallery/image6.jpg";
// ... import more images

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Gallery = () => {
  const galleryImages = [image1, image2, image3,image4, image5, image6]; // Add more images to this array

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
      <div className="container mx-auto py-16">
        <h2 className="text-5xl font-Inria font-bold mb-8">Gallery</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
