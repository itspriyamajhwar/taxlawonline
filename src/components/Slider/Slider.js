import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tax Filing" />
            <div className="slide-text">
              <h2>Effortless Tax Filing</h2>
              <p>File your taxes with ease and accuracy. Get started today!</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2022/11/GST-3.jpg" alt="GST Registration" />
            <div className="slide-text">
              <h2>GST Registration Simplified</h2>
              <p>We make GST registration quick and hassle-free.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://images.pexels.com/photos/8111865/pexels-photo-8111865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Business Compliance" />
            <div className="slide-text">
              <h2>Stay Compliant, Stay Ahead</h2>
              <p>We help your business stay compliant with all regulations.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
