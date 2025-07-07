import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";

const ServicesComponent = ({ isLoading }) => {
  useEffect(() => {
    // Ensure animations trigger correctly after loading screen
    if (!isLoading) {
      const elements = document.querySelectorAll(".fn_desc.fn_animated_text");
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      });
    }
  }, [isLoading]);

  return (
    <section id="services">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Key Summit Points</h3>
        </div>
        {/* Services */}
        <Swiper
          className="neoh_fn_services"
          spaceBetween={1}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            400: { slidesPerView: 1, spaceBetween: 40 },
            480: { slidesPerView: 1, spaceBetween: 40 },
            640: { slidesPerView: 2, spaceBetween: 40 },
            768: { slidesPerView: 2, spaceBetween: 50 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
            1280: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          <SwiperSlide>
            <div className="item">
              <div className="item_num">
                <span></span>
              </div>
              <div className="item_content">
                <h3 className="fn_title">MISSION STATEMENT</h3>
                <p className="fn_desc fn_animated_text" style={{ opacity: 0, transform: "translateY(10px)" }}>
                  Connecting innovators, investors, and
enthusiasts to drive blockchain adoption
across Eastern Europe.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="item_num">
                <span></span>
              </div>
              <div className="item_content">
                <h3 className="fn_title">IMPORTANCE OF THE EVENT</h3>
                <p className="fn_desc fn_animated_text" style={{ opacity: 0, transform: "translateY(10px)" }}>
                  Romania represents an untapped market in
the Web3 ecosystem, with rapidly growing
crypto adoption in the region.

                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="item_num">
                <span></span>
              </div>
              <div className="item_content">
                <h3 className="fn_title">CORE FOCUS AREAS</h3>
                <p className="fn_desc fn_animated_text" style={{ opacity: 0, transform: "translateY(10px)" }}>
                  Web3 innovation, blockchain technology,
crypto investment, and decentralized finance
(DeFi).
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* !Services */}
      </div>
    </section>
  );
};

export default ServicesComponent;
