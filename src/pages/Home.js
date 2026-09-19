import React from "react";
import { Link } from "react-router-dom";
import video01 from "../videos/web_game.mp4";
import video02 from "../videos/capgras.mp4";
import video03 from "../videos/isiana.mp4";

function Home() {
  return (
    <>
      <div className="home-div container">
        <h1 className="home-title">Hey, I'm Mariana Urcuqui</h1>
        <p className="home-paragraph">
          And I made this website from scratch to show you my projects and how
          interested I am in exploring the intersection of hardware and
          software.
        </p>
      </div>
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-div">
        <Link to="projects">
          <section className="project-preview">
            <video loop autoPlay muted className="proj-preview-vid">
              <source src={video01} type="video/mp4"></source>
              Your browser does not support html5 videos
            </video>
            <h3>Why Not Play Until the End - Web-Based Game</h3>
            <p>
              <span>Role: </span>Game & Interactive Developer
              <br />
              <span>Skills: </span>React, PixiJS...
              <br />
              <span>Time frame: </span>8 months <br />
            </p>
          </section>
        </Link>
        <Link to="projects/project02">
          <section className="project-preview">
            <video loop autoPlay muted className="proj-preview-vid">
              <source src={video02} type="video/mp4"></source>
              Your browser does not support html5 videos
            </video>
            <h3>CAPGRAS - Narrative game</h3>
            <p>
              <span>Role: </span>Game Developer/Programmer
              <br />
              <span>Skills: </span>C#, Unity, UI Toolkit, Git
              <br />
              <span>Time frame: </span>2 months
            </p>
          </section>
        </Link>
        <Link to="projects/project03">
          <section className="project-preview">
            <video loop autoPlay muted className="proj-preview-vid">
              <source src={video03} type="video/mp4"></source>
              Your browser does not support html5 videos
            </video>
            <h3>Headless E-Commerce - Prototype</h3>
            <p>
              <span>Role: </span>Frontend & E-Commerce Developer
              <br />
              <span>Skills: </span>NextJS, WooCommerce...
              <br />
              <span>Time frame: </span>1 year
            </p>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Home;
