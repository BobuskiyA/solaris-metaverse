import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import PopUp from "./PopUp/PopUp";
import TechSupportIcon from "../../../components/TechSupportIcon/TechSupportIcon";

import windows from "../../../images/home/windows.svg";
import mac from "../../../images/home/mac_os.svg";

import "./Hero.scss";

const isMobile = window.innerWidth <= 768;

const downloadClick = {
  block: {
    open: {
      width: isMobile ? "100%" : "170%",
      height: "420%",
      left: "50%",
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      width: "1px",
      height: "1px",
      transition: {
        duration: 0.8,
        delay: 0.45,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  text: {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        delay: 1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  },
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% top",
        onEnter: () => setIsOpen(false),
      },
    });
  });

  return (
    <section id="hero" className="hero">
      <TechSupportIcon href="https://web.telegram.org/a/#6406621205" />
      <ParalaxBackground />
      <p className="small-text hero__under_header">
        Connect MetaMask wallet and get 150$ols Token as a gift, which will be
        capitalized in 2024.
      </p>
      <PopUp />

      <div className="about">
        <div className="about__left">
          <h2 className="bold about_sub_title">
            WORLDWIDE RELEASE
            <br /> 09.06.2024
          </h2>
          <div className="about__download">
            <div
              className="about__download_button"
              onClick={() => setIsOpen(!isOpen)}
            >
              Start the engine
            </div>
            <motion.div
              className="about__download_text"
              variants={downloadClick.block}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            >
              <motion.div
                className="about__download_content"
                variants={downloadClick.text}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
              >
                <div className="cross" onClick={() => setIsOpen(!isOpen)} />

                <div className="download_os_choose">
                  <h2 className="download_os_choose_text">
                    For
                    <img
                      src={windows}
                      alt="windows"
                      className="download_os_choose_logo"
                    />
                    Windows
                  </h2>

                  <a
                    href="../../../games/Windows.exe"
                    className="download_os_choose__button"
                    download
                  >
                    Download
                  </a>
                </div>
                <div className="download_os_choose">
                  <h2 className="download_os_choose_text">
                    For
                    <img
                      src={mac}
                      alt="mac os"
                      className="download_os_choose_logo"
                    />
                    Mac os
                  </h2>

                  <a
                    href="../../../games/Mac.exe"
                    className="download_os_choose__button"
                    download
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="about__right">
          <h2 className="about__title">Developed on Frostbite</h2>
          <h2 className="bold about__title_adding">ONLY FOR PC</h2>
        </div>
      </div>
    </section>
  );
};

const ParalaxBackground = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom center",
          scrub: 0.001,
        },
      })
      .to(".paralax__bottom", {
        bottom: "-2%",
        duration: 0.7,
      });
  });

  return (
    <>
      <div className="paralax paralax__top" />
      <h1 className="paralax__text">
        <span>
          Solaris
          <br />
          metave
        </span>
        <span>rse</span>
      </h1>
      <div className="paralax paralax__bottom" />
    </>
  );
};

export default Hero;
