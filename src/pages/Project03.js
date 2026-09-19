import React from "react";
import video from "../videos/isiana.mp4";

function Project03() {
  return (
    <div className="container proj-container">
      <h1 className="proj-title">Headless E-Commerce</h1>
      <h2 className="center-subtitle">Prototype</h2>
      <video loop autoPlay muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <h2 className="proj-subtitle">Development</h2>
      <p className="proj-paragraph">
        For Isiana Bags&Shoes, I developed a custom e-commerce website using a
        headless architecture, separating the customer-facing frontend from the
        e-commerce backend. The frontend was built from scratch with Next.js,
        React, and TypeScript, while WooCommerce was used as the commerce
        backend. The two systems communicate through the WooCommerce API,
        allowing the website to retrieve and work with product and store data
        independently from WooCommerce's default frontend.{" "}
      </p>
      <p className="proj-paragraph">
        My work focused on designing and implementing the frontend experience,
        including the structure of the application, reusable components,
        responsive layouts, product presentation, and interactive shopping
        functionality. I also integrated the ePayco payment gateway,
        implementing the payment flow and connecting the frontend and e-commerce
        system with the external payment service.
      </p>
      <h2 className="proj-subtitle">Technical Skills</h2>
      <div className="skills-div">
        <h4 className="skill">NextJS</h4>
        <h4 className="skill">TypeScript</h4>
        <h4 className="skill">React</h4>
        <h4 className="skill">WooCommerce</h4>
        <h4 className="skill">WooCommerce API</h4>
        <h4 className="skill">ePayco</h4>
      </div>
      <p className="proj-paragraph" style={{ marginTop: 100 }}>
        <strong>Source code: </strong>The code is private due to contractual
        confidentiality requirements. I would be happy to discuss the project
        and my technical contributions in more detail. Every image is a
        placeholder.
      </p>
    </div>
  );
}

export default Project03;
