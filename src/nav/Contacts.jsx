import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We have received your message.");
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <section className="contact" id="contacts">
      <div className="container">
        <h2 className="title contact__title">
          <span className="title__bold">Contact us</span>
        </h2>
        <p className="descr contact__descr">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis,
          at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__up">
            <label className="form__label">
              Name &ast;
              <input
                type="text"
                name="name"
                className="input-reset form__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form__label">
              Email address &ast;
              <input
                type="email"
                name="email"
                className="input-reset form__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label className="form__label">
            Message &ast;
            <textarea
              name="message"
              className="form__message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn-reset form__btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
