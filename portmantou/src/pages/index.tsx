import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
const styles = {
  fontSize: "106px",
  textAlign: "center",
  // Add more styles as needed
};
const AnimatedBox = () => {
  return (
    <React.Fragment>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Hina+Mincho&family=Inika:wght@400;700&family=K2D&display=swap')
      </style>
      <body>
        <div className="titleboxparent">
          <motion.div
            className="titlebox"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.45 }}
          >
            <div className="titlecontent">
              <h2 className="styletitle">Hello, My Name is</h2>
              <h1 className="nametitle">Aditya Velusamy</h1>
            </div>
          </motion.div>
        </div>
        <div className="aboutmeboxparent">
          <motion.div
            className="aboutmebox"
            // initial={{ x: 1000 }}
            // animate={{ x: 0 }}
            // transition={{ duration: 1, type: "spring", bounce: 0.45 }}
          >
            <div className="aboutmecontentbox">
              <h1 className="aboutmetitle">About Me</h1>
              <p className="aboutmecontent">
                I am a high shcool student who occasionally likes coding. I have
                extensive experience with languages like Python and Javascript.
                I also have experience with using frameworks for frontend like
                React and Gatsby, as well as backend frameworks like NodeJS and
                ExpressJS.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="technologiesboxparent">
          <motion.div
            className="technologiesbox"
            // initial={{ x: 1000 }}
            // animate={{ x: 0 }}
            // transition={{ duration: 1, type: "spring", bounce: 0.45 }}
          >
            <h1 style={styles}>App Academy Projects</h1>
            <ul style={{ fontFamily: "K2D" }}>
              <li>
                Project: Sand Art Project <br /> Link:
                <a href="https://editor.p5js.org/avelusamy/sketches/HRUI1TG1W">
                  https://editor.p5js.org/avelusamy/sketches/HRUI1TG1W{" "}
                </a>
                <br /> Description: This is a project where I created a sand art
                art simulation using a guide provided in class.
              </li>
              <li>
                Project: Platformer Game <br /> Link:
                <a href="https://editor.p5js.org/avelusamy/sketches/8O_xdWHCl">
                  https://editor.p5js.org/avelusamy/sketches/8O_xdWHCl{" "}
                </a>
                <br /> Description: This is a platformer game where the goal is
                to reach the finish point, may or may not work based on how p5
                feels.
              </li>
              <li>
                Project: Madlibs Project <br /> Link:
                <a href="https://editor.p5js.org/avelusamy/sketches/MqijCKypd">
                  https://editor.p5js.org/avelusamy/sketches/MqijCKypd{" "}
                </a>
                <br /> Description: This is a madlibs project where the user
                will enter a few words into an alert and the program will
                generate a story based on the words.
              </li>
              <li>
                Project: Encoding Tool <br /> Link:
                <a href="https://editor.p5js.org/avelusamy/sketches/mUba_-ZDj">
                  https://editor.p5js.org/avelusamy/sketches/mUba_-ZDj{" "}
                </a>
                <br /> Description: This is a tool that accepts a string and
                will encode or decode it for you. Has support for txt files as
                both an input and output.
              </li>
            </ul>
          </motion.div>
        </div>
      </body>
      <footer className="footer">
        <motion.div
          className="footer-content"
          // initial={{ y: 100 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 1, type: "spring", bounce: 0.45 }}
        >
          <a href="https://www.twitter.com/adityavelusamy/">
            <img
              className="icon"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
            />
          </a>
          <a href="mailto:contact@avelusamy.com">
            <img
              className="icon"
              src="https://static.vecteezy.com/system/resources/previews/020/009/614/original/email-and-mail-icon-black-free-png.png"
            />
          </a>
          <a href="https://github.com/adityavelusamy/Portfolio/tree/app-academy">
            <img
              className="icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
            />
          </a>
          <br />
          <p>Made by Aditya Velusamy :)</p>
        </motion.div>
      </footer>
    </React.Fragment>
  );
};

export default AnimatedBox;
