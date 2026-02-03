import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const ProjectSwiper = ({ type, data, onProgress, swiperRef, onSelect }) => {
  return (
    <article className={`projectSwiper ${type}`}>
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        breakpoints={{
          490: {
            slidesPerView: "auto",
            spaceBetween: 40,
            centeredSlides: false,
            slidesOffsetAfter: 20,
            pagination: false,
          },
        }}
        grabCursor={true}
        speed={800}
        resistanceRatio={0.6}
        threshold={10}
        onProgress={(swiper, progress) => {
          onProgress(progress);
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="projectSlideItem" onClick={() => onSelect(item)}>
              <ProjectCard type={type} {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default ProjectSwiper;
