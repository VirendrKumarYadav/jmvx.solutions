import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const testimonialsData = [
  {
    text: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, «Lorem ipsum dolor sit amet.», comes from a line in section 1.10.32.",
    author: "Dean Martin",
    position: "CEO Acme Inc.",
  },
  {
    text: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, «Lorem ipsum dolor sit amet.», comes from a line in section 1.10.32.",
    author: "John Doe",
    position: "Founder XYZ Ltd.",
  },
  {
    text: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, «Lorem ipsum dolor sit amet.», comes from a line in section 1.10.32.",
    author: "Jane Smith",
    position: "Marketing Head, ABC Corp.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section__black" id="testimonials">
      <div className="container">
        <h2 className="title title__white testimonials__title">
          <span className="title__bold">Our clients'</span> testimonials
        </h2>
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <h3 className="swiper__text">{testimonial.text}</h3>
              <p className="swiper__person">
                <span className="grey__bold">{testimonial.author},</span> {testimonial.position}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
