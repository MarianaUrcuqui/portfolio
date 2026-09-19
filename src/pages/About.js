import React from "react";

function About() {
  return (
    <div className="container">
      <div className="about-first-div">
        <img src="./images/me.jpg" alt="portrait" className="about-img" />
        <h1 className="about-title">About me</h1>
        <p className="about-first-paragraph">
          Here you will find my current skills, and a look at my journey and
          love for technology
        </p>
      </div>
      <div className="about-div">
        <div className="about-subdiv">
          <h2 className="about-subtitle">A little about me</h2>
          <p className="about-paragraph">
            Hey, I'm Mariana. I'm currently studying VSI MINT at Saarland
            University, preparing to continue my studies in Computer Science. My
            background is in software development, with experience in web
            technologies, interactive applications, and game development.
          </p>
          <p className="about-paragraph">
            What interests me most is understanding how technology works beyond
            the screen. I'm currently expanding my knowledge from software
            development into computer architecture, digital logic, and the
            hardware-software interface, with the long-term goal of working with
            systems that can interact with the physical world.
          </p>
        </div>
        <div className="about-subdiv">
          <h2 className="about-subtitle">My skills</h2>
          <div className="skills-div">
            <h4 className="skill">C#</h4>
            <h4 className="skill">Unity</h4>
            <h4 className="skill">Godot</h4>
            <h4 className="skill">GDScript</h4>
            <h4 className="skill">React</h4>
            <h4 className="skill">NextJS</h4>
            <h4 className="skill">TypeScript</h4>
            <h4 className="skill">JavaScript</h4>
            <h4 className="skill">Tailwind</h4>
            <h4 className="skill">GitHub</h4>
            <h4 className="skill">Terminal</h4>
            <h4 className="skill">WooCommerce</h4>
            <h4 className="skill">PixiJS</h4>
            <h4 className="skill">IndexedDB</h4>
            <h4 className="skill-to-learn">Learning Python</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
