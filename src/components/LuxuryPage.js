// LuxuryPage.jsx
import React from "react";
// import "./LuxuryPage.css";
import "../App.css";
import { useEnquiryModal } from "./EnquiryModal";

const LuxuryPage = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="about" className="luxury-page">
      {/* ----------- Section 1: Luxury Launch ----------- */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img
            src="../Assets/ov.jpg"
            alt="Luxury View"
          />
        </div>
        <div className="luxury-text">
          <h2>
            Palm Jebel Ali Dubai
          </h2>
          <p>
            Discover unmatched luxury at The Palm Jebel Ali by Nakheel, an iconic address offering an exclusive collection of Beach and Coral Villas. Each residence blends modern design with timeless elegance, seamlessly connecting the ocean, sky, and pristine beachfront. Inside, seven spacious ensuite bedrooms, refined living areas, and dedicated spaces for a guard’s house and dual maid’s quarters provide exceptional comfort and versatility. Crafted with meticulous attention to detail, The Palm Jebel Ali redefines opulent living, delivering a lifestyle of sophistication and serenity in one of Dubai’s most prestigious waterfront destinations.
          </p>
          <button onClick={openModal} className="btn-download">DOWNLOAD BROCHURE</button>
        </div>
      </section>

      {/* ----------- Section 2: Amenities ----------- */}
      {/* <section className="amenities-section">
        <div className="carousel-half">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className="swiper-amenities"
          >
            <SwiperSlide>
              <img
                src="../Assets/a1.jpg"
                alt="Amenities 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../Assets/a2.jpg"
                alt="Amenities 2"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-half">
          <h2>AMENITIES</h2>
          <p>
            Live the high life at Luxury Launch with exclusive amenities like an
            infinity pool, gym, yoga deck, landscaped gardens, and more – crafted
            to offer unmatched comfort, elegance, and everyday indulgence.
          </p>
          <button className="btn-download">DOWNLOAD AMENITIES</button>
        </div>
      </section> */}

      {/* ----------- Section 3: Gallery ----------- */}
      {/* <section className="gallery-section">
        <div className="text-half">
          <h2>GALLERY</h2>
          <p>
            Explore the gallery of Project to get a glimpse of its stunning
            architecture, luxurious interiors, premium amenities, and vibrant
            lifestyle – a visual preview of the life that awaits you.
          </p>
          <button className="btn-download">DOWNLOAD GALLERY</button>
        </div>
        <div className="carousel-half">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className="swiper-gallery"
          >
            <SwiperSlide>
              <img
                src="../Assets/g1.jpg"
                alt="Gallery 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../Assets/g2.jpg"
                alt="Gallery 2"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
    </div>
  );
};

export default LuxuryPage;
