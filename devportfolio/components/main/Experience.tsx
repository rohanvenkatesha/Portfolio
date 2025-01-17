"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { timelineData, TabKey } from "@/constants/timelineData";
import ExpandCollapseCard from "../sub/ExpandCollapseCard";
import CircularProgressBar from "../sub/CircularProgressBar";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Education");

  // Separate state for Experience and Awards tabs
  const [expandedExperienceCardIndex, setExpandedExperienceCardIndex] = useState<number | null>(null);
  const [expandedAwardsCardIndex, setExpandedAwardsCardIndex] = useState<number | null>(null);

  const tabs: TabKey[] = ["Education", "Experience", "Awards"];

  const ref = useRef(null);
  const isInView_title = useInView(ref);

  const handleExperienceCardToggle = (index: number) => {
    setExpandedExperienceCardIndex(expandedExperienceCardIndex === index ? null : index);
  };

  const handleAwardsCardToggle = (index: number) => {
    setExpandedAwardsCardIndex(expandedAwardsCardIndex === index ? null : index);
  };

  // Calculate total experience for fulltime, internship, and parttime
  const calculateTotalExperience = () => {
    let fullTimeYears = 0;
    let internshipYears = 0;
    let partTimeYears = 0;

    timelineData["Experience"].forEach((item) => {
      if (item.fullTimeYears) fullTimeYears += item.fullTimeYears;
      if (item.internshipYears) internshipYears += item.internshipYears;
      if (item.partTimeYears) partTimeYears += item.partTimeYears;
    });

    return {
      fullTimeYears,
      internshipYears,
      partTimeYears,
      totalExperience: fullTimeYears + internshipYears + partTimeYears,
    };
  };

  const { fullTimeYears, internshipYears, partTimeYears, totalExperience } = calculateTotalExperience();

  // Calculate width percentage for each section of the bar
  const fullTimePercentage = (fullTimeYears / totalExperience) * 100;
  const internshipPercentage = (internshipYears / totalExperience) * 100;
  const partTimePercentage = (partTimeYears / totalExperience) * 100;

  return (
    <section
      className="montserrat-reg w-full h-auto flex flex-col items-center justify-center relative gap-10 py-20 text-white mx-4"
      id="timeline"
    >
      <StarryBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView_title ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="montserrat-hero text-[40px] cursor-pointer bg-gradient-right py-10">Timeline</h1>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-5 sm:gap-5 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "tab-button-active" : "tab-button-inactive"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Experience Progress Bar (Single Line) */}
      {activeTab === "Experience" && (
        <div className="w-full max-w-4xl mb-8">
          <div className="text-center text-lg text-white mb-2">
            Total Experience: {totalExperience} years
          </div>
          {/* <div className="flex justify-between text-sm text-white mb-4">
            <span>Fulltime: {fullTimeYears} years</span>
            <span>Internship: {internshipYears} years</span>
            <span>Parttime: {partTimeYears} years</span>
          </div> */}
          <motion.div
             className="relative w-[90%] sm:w-[80%] md:w-[70%] mb-4 h-6 bg-gray-600 justify-center rounded-full mx-auto"
            style={{
              background: `linear-gradient(to right, 
                #4e73df ${fullTimePercentage}%, 
                #fbbd02 ${fullTimePercentage + internshipPercentage}%, 
                #9b59b6 ${fullTimePercentage + internshipPercentage + partTimePercentage}%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Text for Fulltime, Internship, and Parttime */}
            <motion.span
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xs"
              style={{ left: `${fullTimePercentage / 2}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Fulltime */}
            </motion.span>
            <motion.span
              className="absolute top-1/2 transform -translate-y-1/2 text-white text-xs"
              style={{ left: `${fullTimePercentage + internshipPercentage / 2}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Internship */}
            </motion.span>
            <motion.span
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xs"
              style={{ right: `${partTimePercentage / 2}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Parttime */}
            </motion.span>
          </motion.div>

          <div className="w-full mb-8 flex justify-center gap-5 items-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#4e73df]"></div>
          <span className="text-white text-sm">{fullTimeYears} years Fulltime</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#fbbd02]"></div>
          <span className="text-white text-sm">{internshipYears} years Internship</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#9b59b6]"></div>
          <span className="text-white text-sm">{partTimeYears} years Parttime</span>
        </div>
      </div>
        </div>
      )}

      {/* Legend for Experience Categories */}

      {/* Timeline */}
      <div className="w-full max-w-4xl">
        {timelineData[activeTab].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-row gap-6 mb-8 p-6 border-l-4 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-1000"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* GPA Circular Progress Bar (for Education tab only) */}
            {activeTab === "Education" && item.gpa && item.maxGpa && (
              <div className="flex items-center justify-start">
                <CircularProgressBar value={item.gpa} maxValue={item.maxGpa} />
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <span className="text-sm text-gray-400">{item.date}</span>
              <p className="text-sm text-gray-200 mt-2">{item.details}</p>

              {/* Expand/Collapse Logic */}
              {activeTab === "Experience" && (
                <ExpandCollapseCard
                  index={index} 
                  isOpen={expandedExperienceCardIndex === index} 
                  setIsOpen={() => handleExperienceCardToggle(index)} 
                  details={item.details}
                  achievements={item.achievements}
                  additionalDetails={item.additionalDetails}
                  additionalImage={item.additionalImage}
                />
              )}

              {activeTab === "Awards" && (
                <ExpandCollapseCard
                  index={index} 
                  isOpen={expandedAwardsCardIndex === index} 
                  setIsOpen={() => handleAwardsCardToggle(index)} 
                  details={item.details}
                  achievements={item.achievements}
                  additionalDetails={item.additionalDetails}
                  additionalImage={item.additionalImage}
                />
              )}
            </div>

            {/* University Logo (for Education tab only) */}
            {activeTab === "Education" && item.logo && (
              <div className="relative flex items-center ml-auto">
                <img src={item.logo} alt="University Logo" className="w-[50px] h-auto" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
