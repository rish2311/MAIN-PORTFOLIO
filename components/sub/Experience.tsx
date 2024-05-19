"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
const Experience = () => {
  return (
    <div className="flex-col flex items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Experience
      </motion.div>

      <div className="mt-8"></div>
      <div className="lg:flex items-center justify-center">
        <div className="m-3   p-4 rounded-lg  ">
          <h2 className=" text-[20px]  font-semibold text-stone-200">
            AI-ML Virtual Internship
          </h2>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Streamlined the datasets classification to optimize model
            performance by 10%. Implemented advanced clustering algorithms to
            streamline data analysis processes, resulting in a 25% reduction in
            processing time and a 30% improvement in accuracy.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
