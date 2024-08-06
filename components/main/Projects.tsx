"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full z-30   w-full flex flex-col md:flex-row gap-10 px-10">
        <a
          href="https://github.com//Face-Recognition-Attendence-Project"
          target="_blank"
        >
          <ProjectCard
            src="/https://img.freepik.com/free-photo/thrift-shop_53876-18005.jpg?size=626&ext=jpg"
            title="Thrift Shop"
            description="
          A dynamic E-commerce web application with single-page rendering. Reduced query times and utilized Redux for efficient state management. Developed a robust backend with Express & Node.js, optimized MongoDB schema, and integrated secure payment APIs
          "
          />
        </a>
        <a href="https://github.com/rish2311/ThriftShop" target="_blank">
          <ProjectCard
            src="/medicine-project2.png"
            title="Medicine Recommender System"
            description="
          Developed a cutting-edge Medicine Recommendation System that integrated sentiment analysis of user reviews, leading
          to a 30% boost in medication effectiveness and a 20% decrease in treatment costs.
          Designed the system with scalability in mind. And Optimized system performance for quick response times, enhancing
          the overall user experience."
          />
        </a>
        <a href="https://chat-cord-eight.vercel.app/" target="_blank">
          <ProjectCard
            src="/chat-shat-project3.jpeg"
            title="Chatify"
            description="Developed a frontend chat application for real-time interaction using VoIP. A robust real-time messaging system with Socket.io, supporting video conferencing and peer-to-peer communication. Reduced message delivery latency, thus, improving overall user experience. The app enables fast and seamless real-time interaction between users."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
