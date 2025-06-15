import React from 'react'

export default function Vision() {
  return (
    <>
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
                          marginBottom: "3rem",
                backgroundColor: "var(--accent)", padding: "0.5rem"
              }}
            >
              Our Vision
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
    
         
              
         
        </div>
    </>
  )
}