import React, { useState } from "react";
import "../assets/stylesheets/Contact.css";
import ContactImg from "../assets/images/264da61d-a467-4e7b-b9c8-cbfc8e4e5462.png";

const positions = [
  "Customer support",
  "Engineering - Aerospace and Mechanics",
  "Engineering - Operations",
  "Engineering - Software and Analytics",
  "Human Resources",
  "Marketing & Communications",
];

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    position: "",
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = () => {
    const errors = {};
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Please enter a valid email address";
    if (!form.firstName) errors.firstName = "Enter a name";
    if (!form.lastName) errors.lastName = "Enter a last name";
    if (!form.address) errors.address = "Enter an address";
    if (!form.position) errors.position = "Select a position";
    return errors;
  };

  const errors = validate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      firstName: true,
      lastName: true,
      address: true,
      position: true,
    });
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      // Submit logic here
      alert("Form submitted!");
      setForm({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        position: "",
      });
      setTouched({});
      setSubmitted(false);
    }
  };

  return (
    <>
      <div className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-content">
          <h2>Contact us</h2>
          <p>
            Mars Explorer is looking for world-class talent ready to tackle
            challenging projects that will ultimately enable life on other
            planets. We are an equal opportunity employer offering competitive
            salaries, comprehensive health benefits and equity packages.
          </p>
        </div>
        <img src={ContactImg} alt="rocket" className="contact-hero-rocket" />
      </div>
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "invalid" : ""}
              autoComplete="off"
            />
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.firstName && touched.firstName ? "invalid" : ""
                }
                autoComplete="off"
              />
              {errors.firstName && touched.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lastName && touched.lastName ? "invalid" : ""}
                autoComplete="off"
              />
              {errors.lastName && touched.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.address && touched.address ? "invalid" : ""}
              autoComplete="off"
            />
            {errors.address && touched.address && (
              <div className="error">{errors.address}</div>
            )}
          </div>
          <div className="form-group">
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.position && touched.position ? "invalid" : ""}
            >
              <option value="">Position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
            {errors.position && touched.position && (
              <div className="error">{errors.position}</div>
            )}
          </div>
          <button type="submit" className="contact-btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
