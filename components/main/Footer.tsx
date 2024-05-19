"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Footer = () => {
  const [showGithub, setShowGithub] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [btnText, setBtnText] = useState("Unlock");

  function getGithub() {
    setShowGithub(!showGithub);
    setShowVideo(!showVideo);
    setBtnText(btnText === "Unlock" ? "Lock" : "Unlock");
  }

  return (
    <div>
      <center>
        <div className="pb-10 z-40">
          <div
            className=" flex items-center justify-center flex-col h-full w-full"
            id="about-me"
          >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              Github Contribution
            </h1>
            {showVideo && (
              <video
                id="video"
                onClick={getGithub}
                muted
                loop
                autoPlay
                className=""
              >
                <source src="/encryption.webm" type="video/webm" />
              </video>
            )}
            <div className="z-40">
              {showGithub && (
                <GitHubCalendar
                  username="imrishabhmehrotra"
                  blockSize={15}
                  blockMargin={4}
                  fontSize={20}
                  hideMonthLabels
                  hideTotalCount
                  hideColorLegend
                />
              )}
            </div>
            <motion.a
              onClick={getGithub}
              variants={slideInFromLeft(1)}
              className="p-3 mt-4 z-30 font-semibold button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              {btnText}
            </motion.a>
          </div>
        </div>
      </center>
      <br />
      <br />
      <div className="lg:hidden fixed bottom-0 left-[25%]  md:flex sm:flex z-20  flex items-center justify-center gap-x-5 pb-5    ">
        <div className=" z-20  w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="z-20  flex items-center justify-between  mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 w-full h-auto border border-[#7042f861] bg-[#0300145e]  ">
            <a href="#about-me" className="cursor-pointer ">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a
              href="
              https://drive.google.com/file/d/1S_9uUvSCgBxY1eYIDsKvp4g3F4Yc2zTa/view
              "
              className="cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
