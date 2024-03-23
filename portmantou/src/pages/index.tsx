import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const AnimatedBox = () => {
  return (
    <React.Fragment>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=K2D&display=swap')
      </style>
      <body>
        <nav>
          <motion.div
            className="nav-content"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0, type: "spring", bounce: 0.45 }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/9a88/fd93/c53b74ecae44f654ec9b6840a24e61b2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dZ3azxVGjti7dgU9WThHRhEKo7VhQ8-ikhH5LeJsimiE8keXdd-pmaVzDHEyc8mdiM1dPbxEb5D5rbry3TKklDDSWqRIqgceHCXC1Ctgl7e-fk-Lzm0YjLg42Dz1UsCwhypmrrMhomFL~ooI~nkpuRzkk1xql4rTH0cwEFUO3H~I7xaunRIBXgHj-UWpKaKKsg0MkXwIWHC8IUbo7qKiFAyUazRUozaPgnuCjj6NxQez-j3DximNIBB7luVIU39VnlT5WCDvUiYMQuY5k4MonAd5fF8kMU2X~xJbDdjmzVPwHhoVvrsKnT-x8im5HzcXM5foBuZwc1op~2OCc5K3XA__"
              style={{ height: "59px", top: "-10px" }}
            />
          </motion.div>
        </nav>
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
