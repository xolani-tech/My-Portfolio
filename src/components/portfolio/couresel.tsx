// components/BadgeStrip.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const badges = [
  { id: 1, image: "/images/Life Choices Academy - SCRUM Project Planning & Agile Fundamentals - 2025-03-16.png", name: "Scrum" },
  { id: 2, image: "images/Life Choices Academy - UIUX Design Foundations & Practice - 2025-04-17.png", name: "UI/UX" },
  { id: 3, image: "images/Life Choices Academy - WordPress Site Builder Portfolio Edition - 2025-05-09.png", name: "Wordpress" },
  { id: 4, image: "images/Life Choices Academy - Real-Time Systems Developer - 2025-04-23 (1).png", name: "Real Systems" },
  { id: 5, image: "images/networking-basics.png", name: "Cisco" },
  { id: 6, image: "images/networking-devices-and-initial-configuration.png", name: "Cisco" },
  { id: 7, image: "images/aws.png", name: "AWS" },

];

export default function BadgeStrip() {
  return (
    // <div className="w-full py-6 border-t border-white/10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={40}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {badges.map((badge) => (
          <SwiperSlide key={badge.id}>
            <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
              <img
                src={badge.image}
                alt={badge.name}
                className="h-32 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    // </div>
  );
}
