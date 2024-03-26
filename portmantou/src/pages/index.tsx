import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

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
            <h2 className="styletitle">Hello, My Name is</h2>
            <h1 className="nametitle">Aditya Velusamy</h1>
          </motion.div>
        </div>
        <div className="aboutmeboxparent">
          <motion.div
            className="aboutmebox"
            // initial={{ x: 1000 }}
            // animate={{ x: 0 }}
            // transition={{ duration: 1, type: "spring", bounce: 0.45 }}
          >
            <p className="content">
              I am a software engineer and a student at the University of
              Waterloo. I am passionate about building software that makes a
              difference in the world. I am currently looking for internships
              for the summer of 2022. I am proficient in Java, Python, C++, and
              JavaScript. I have experience with React, Node.js, and Express.js.
              I am also familiar with SQL and NoSQL databases. I am always
              looking for new opportunities to learn and grow. I am excited to
              work with you!
            </p>
          </motion.div>
        </div>
      </body>
      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.45 }}
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
          <a href="https://www.github.com/avelusamy">
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
