import React from "react";

export default function ContactUS() {
  return (
    <div className="container page pt-5 ps-5 pe-5 bg-light pb-5 mt-5 mb-5 w-50">
      <h2 className="mb-4 text-center" style={{ color: "var(--primary)" }}>
        Contact Us
      </h2>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
          />
        </div>
        <button
          className="btn"
          style={{ backgroundColor: "var(--primary)", color: "#fff" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
