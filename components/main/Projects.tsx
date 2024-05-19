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
          href="https://github.com/imrishabhmehrotra/Face-Recognition-Attendence-Project"
          target="_blank"
        >
          <ProjectCard
            src="/face-project1.webp"
            title="Medicine Recommender System"
            description="
          Spearheaded the development and implementation of an advanced attendance system leveraging state-of-the-art image
          detection and face recognition algorithms.
          Successfully increased efficiency and accuracy in attendance monitoring processes by eliminating manual data entry
          errors and streamlining attendance management workflows.
          
          "
          />
        </a>
        <a
          href="https://github.com/imrishabhmehrotra/Medicine-Recommender-System"
          target="_blank"
        >
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
        <a href="https://github.com/imrishabhmehrotra/CHATSHAT" target="_blank">
          <ProjectCard
            src="/chat-shat-project3.jpeg"
            title="ChatShat"
            description="
            Chatting app allows you to communicate with your customers in web chat rooms.
          Full stack Chat Application for real time interaction between users.
          Led the development of a real-time full-stack chat application using React.js, Redux Toolkit, Node.js, and Express.js.
          The app enables fast and seamless real-time interaction between users."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
