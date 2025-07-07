import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import landing_infor from "@/data/landing.json";
import partners_infor from "@/data/partners.json";

const WhyChooseUsComponent = () => {
  // Define styles for the logo container and the image itself
  const logoContainerStyles = {
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  };

  const logoStyles = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    display: "block",
  };

  return (
    <section id="investor">
      <div className="container">
        <div className="neoh_fn_title">
          <h3 className="fn_title">Always reaching new heights</h3>
        </div>
        <Swiper
          className="neoh_fn_services"
          spaceBetween={1}
          slidesPerView={4}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          freeMode={true}
          speed={5000}
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
          {landing_infor.map((index, key) => (
            <SwiperSlide key={key}>
              <img src={`img/landing/${index.avatar}`} alt="avatar" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="neoh_fn_title">
          <h3 className="fn_title" style={{ marginTop: "100px" }}>Partners</h3>
        </div>

        <div className="neoh_fn_investor">
          <ul>
            {partners_infor.map((index, key) => (
              <li key={key}>
                <div className="item">
                  <div style={logoContainerStyles}>
                    <img
                      src={`img/landing/${index.logo}`}
                      alt={index.title}
                      style={logoStyles}
                    />
                  </div>
                  <a href={index.url} className="full_link" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;
