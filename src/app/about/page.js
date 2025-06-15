import React from "react";
import { FaBolt, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="pb-5 mx-0 page">
      {/* Heading */}
      <div className="text-center" style={{ marginBottom: "5rem" }}>
        <img
          src="/freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home.jpg"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            marginBottom: "3rem"
          }}
        />
        <h2
          style={{
            color: "var(--primary)",
            fontWeight: "bold",
            marginBottom: "3rem"
          }}
        >
          About Us
        </h2>
        <p
          style={{
            color: "var(--secondary)",
            maxWidth: "600px",
            margin: "10px auto",
            marginBottom: "3rem",
            lineHeight: "2rem"
          }}
        >
          We are a passionate web development team led by Basma Elmasry,
          specialized in building fast, responsive, and beautiful web
          applications using modern technologies like Next.js, React, and
          Bootstrap.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mt-5" style={{ marginTop: "5rem" }}>
        <div className="row text-center mt-5">
          <div className="col-md-4  mb-4">
            <div
              className="p-4 h-100 rounded"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <FaBolt size={40} style={{ color: "var(--primary)" }} />
              <h5
                className="mt-3 mb-3 fw-semibold"
                style={{ color: "var(--primary)" }}
              >
                Fast Performance
              </h5>
              <p style={{ color: "var(--secondary)" }}>
                Optimized for speed and best practices, our apps load in a
                flash.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="p-4 h-100 rounded"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <FaMobileAlt size={40} style={{ color: "var(--primary)" }} />
              <h5
                className="mt-3 mb-3 fw-semibold"
                style={{ color: "var(--primary)" }}
              >
                Responsive Design
              </h5>
              <p style={{ color: "var(--secondary)" }}>
                Looks great on all devices, from phones to desktops.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="p-4 h-100 rounded"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <FaLaptopCode size={40} style={{ color: "var(--primary)" }} />
              <h5
                className="mt-3 mb-3 fw-semibold"
                style={{ color: "var(--primary)" }}
              >
                Modern Stack
              </h5>
              <p style={{ color: "var(--secondary)" }}>
                We use the latest web technologies like React, Next.js, and
                Tailored CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
