import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const AnimatedBox = () => {
  return (
    <React.Fragment>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=K2D&display=swap')
      </style>
      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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
