"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--foreground)",
        padding: "2rem 0",
        marginTop: "auto"
      }}
    >
      <div className="container text-center text-md-start m-auto">
        <div className="row m-auto">
          {/* About Section */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: "var(--accent)" }}>
              About This Project
            </h5>
            <p>
              This is a demo Next.js application using React Bootstrap, styled
              with a custom theme by <strong>Basma Elmasry</strong>. The site
              demonstrates routing, components, and API usage.
            </p>
          </div>

          {/* Site Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: "var(--accent)" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-decoration-none text-light">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/users" className="text-decoration-none text-light">
                  Users
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-decoration-none text-light">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: "var(--accent)" }}>
              Contact & Social
            </h5>
            <p>
              Email:
              <a href="mailto:engbasma263@gmail.com" className="text-light">
                aaa@sss.com
              </a>
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-light fs-5"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-light fs-5"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-light fs-5"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="text-light fs-5"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "var(--accent)" }} />

        <div className="text-center mt-3">
          <small>
            &copy; 2025 All Rights Reserved — Designed by
            <span style={{ color: "var(--accent)" }}>Basma Elmasry</span>
          </small>
        </div>
      </div>
    </footer>
  );
}
