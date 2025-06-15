"use client";
import React from "react";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div className="pb-5 mx-0">
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url('/web-dev-banner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        } // ضع الصورة في مجلد public
        }
      >
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
      </div>

      {/* Intro Section */}
      <div className="container text-center py-5">
        <h2
          style={{
            color: "var(--primary)",
            fontWeight: "bold",
            marginBottom: "3rem"
          }}
        >
          Build Modern Web Experiences
        </h2>
        <p
          className="mt-3"
          style={{
            color: "var(--secondary)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "2rem"
          }}
        >
          Our mission is to craft beautiful, fast, and fully responsive web apps
          with best practices in performance, accessibility, and design.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div
              className="p-4 h-100 rounded"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <FaCode size={40} style={{ color: "var(--primary)" }} />
              <h5 className="mt-3 fw-bold" style={{ color: "var(--primary)" }}>
                Clean Code
              </h5>
              <p style={{ color: "var(--secondary)" }}>
                We use modular, scalable, and maintainable code standards.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="p-4 h-100 rounded"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <FaPalette size={40} style={{ color: "var(--primary)" }} />
              <h5 className="mt-3 fw-bold" style={{ color: "var(--primary)" }}>
                Custom UI
              </h5>
              <p style={{ color: "var(--secondary)" }}>
                Unique and tailored designs that reflect your brand identity.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="p-4 h-100 rounded"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <FaRocket size={40} style={{ color: "var(--primary)" }} />
              <h5 className="mt-3 fw-bold" style={{ color: "var(--primary)" }}>
                Performance
              </h5>
              <p style={{ color: "var(--secondary)" }}>
                Optimized performance for better user experience and SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
