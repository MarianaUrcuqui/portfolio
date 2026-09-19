import React from "react";
import { Link } from "react-router-dom";
import video from "../videos/web_game.mp4";
function Project01() {
  return (
    <div className="container proj-container">
      <h1 className="proj-title">Why Not Play Until the End</h1>
      <h2 className="center-subtitle">Web-Base Game</h2>
      <video loop autoPlay muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <p style={{ fontSize: 22 }}>
        <a rel="noreferrer" href="https://wnpute.netlify.app" target="_blank">
          Play now!
        </a>
      </p>
      <h2 className="proj-subtitle">Introduction</h2>
      <p className="proj-paragraph">
        Why Not Play Until the End is a cozy-adventure narrative game designed
        to support end-of-life patients and their loved ones in sharing their
        stories through play and connection. The project is developed as part of
        a research-creation process investigating how interactive digital
        narratives can help people die well, particularly adults with terminal
        illness who are not undergoing curative treatment. For participatory
        design and story distribution purposes, the project intends to partner
        with end-of-life care programs that focus on psycho-spiritual
        well-being. <br />
        2D browser game with low cognitive and physical demands—click and point
        mechanics plus user-generated content uploaded via audio, text, and
        image
      </p>
      <h2 className="proj-subtitle">Architecture & Methods</h2>
      <p className="proj-paragraph">
        In order to implement beautiful animations without compromising
        performance, we decided to use{" "}
        <a rel="noreferrer" href="https://pixijs.com" target="_blank">
          PixiJS
        </a>{" "}
        which uses WebGL to leverage GPU-accelerated rendering, allowing us to
        implement smooth animations while reducing the rendering workload on the
        CPU.
      </p>
      <p className="proj-paragraph">
        In an effort to avoid relying on an external database service and keep
        user-generated content stored locally, we decided to use IndexedDB, a
        low-level API for client-side storage built into modern web browsers. It
        is meant to store large amounts of structured data such as images,
        audio, and text locally in a user's browser, enabling our application to
        persist data even after the user closes the browser or navigates to
        other pages. To date, the prototype allows the user to upload images
        (JPG and PNG), write text (text/plain), and asks for permission to use
        the microphone for recording memories (WebM). All of this data can now
        be stored in IndexedDB. <br />
        UI elements and most of the user input were handled with React and
        Tailwind. <br />
        <a
          rel="noreferrer"
          href="https://www.npmjs.com/package/react-timer-hook"
          target="_blank"
        >
          React-timer-hook
        </a>{" "}
        was used to to keep track of the duration of the recordings and also to
        handle the readability of its information on the screen
      </p>
      <h2 className="proj-subtitle">Create the Zip/Memory File</h2>
      <p className="proj-paragraph">
        To generate a PDF from the text the user uploads I used
        <a
          rel="noreferrer"
          href="https://www.npmjs.com/package/@react-pdf/renderer"
          target="_blank"
        >
          {" "}
          react-pdf/renderer
        </a>
        , a library designed specifically for React applications that allows
        developers to generate PDF files on the client side (browser) or on the
        server (Node.js). Additionally, I used{" "}
        <a
          rel="noreferrer"
          href="https://www.npmjs.com/package/jszip"
          target="_blank"
        >
          JSZip
        </a>{" "}
        and{" "}
        <a
          rel="noreferrer"
          href="https://www.npmjs.com/package/filesaver.js?activeTab=readme"
          target="_blank"
        >
          FileSaver.js
        </a>
        , two popular, open-source JavaScript libraries used to create, read,
        and edit .zip files, and to save files directly on the client-side (in
        the browser), rather than relying on a server (which makes the data less
        private) to generate and send them respectively
      </p>
      <h2 className="proj-subtitle">Sound</h2>
      <p className="proj-paragraph">
        I used{" "}
        <a rel="noreferrer" href="https://howlerjs.com" target="_blank">
          howler. js
        </a>
        , an audio library for the modern web, to handle sound effects and
        music.
      </p>

      <h2 className="proj-subtitle">Technical Skills</h2>
      <div className="skills-div">
        <h4 className="skill">TypeScript</h4>
        <h4 className="skill">React</h4>
        <h4 className="skill">IndexedDB</h4>
        <h4 className="skill">Tailwind</h4>
        <h4 className="skill">PixiJS</h4>
        <h4 className="skill">Git</h4>
      </div>
      <p className="proj-paragraph" style={{ marginTop: 100 }}>
        <strong>Source code: </strong>The code is private due to contractual
        confidentiality requirements. I would be happy to discuss the project
        and my technical contributions in more detail.
      </p>
    </div>
  );
}

export default Project01;
