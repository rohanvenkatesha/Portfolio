"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { timelineData, TabKey } from "@/constants/timelineData";
import PieChart from "../sub/PieChart";
import RingChart from "../sub/PieChart";

const CircularProgressBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
  const percentage = (value / maxValue) * 100;
  const radius = 30;
  const stroke = 5;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setOffset(circumference - (percentage / 100) * circumference);
    } else {
      setOffset(circumference);
    }
  }, [isInView, percentage, circumference]);

  return (
    <div ref={ref} className="flex items-center justify-start relative">
      <svg width={80} height={80} viewBox="0 0 80 80" className="rotate-180">
        <circle cx="40" cy="40" r={radius} stroke="#none" strokeWidth={stroke} fill="none" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#0BD11B"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-white font-semibold"
        style={{ fontSize: "1rem" }}
      >
        {value}
      </div>
    </div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Education");

  // Separate state for Experience and Awards tabs
  const [expandedExperienceCardIndex, setExpandedExperienceCardIndex] = useState<number | null>(null);
  const [expandedAwardsCardIndex, setExpandedAwardsCardIndex] = useState<number | null>(null);

  const tabs: TabKey[] = ["Education", "Experience", "Awards"];

  const ref = useRef(null);
  const isInView_title = useInView(ref);

  const handleExperienceCardToggle = (index: number) => {
    // When Experience card is clicked, set the corresponding index, or null if already open
    setExpandedExperienceCardIndex(expandedExperienceCardIndex === index ? null : index);
  };

  const handleAwardsCardToggle = (index: number) => {
    // When Awards card is clicked, set the corresponding index, or null if already open
    setExpandedAwardsCardIndex(expandedAwardsCardIndex === index ? null : index);
  };

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
                  index={index} // Pass the index to identify the card
                  isOpen={expandedExperienceCardIndex === index} // Check if this card is open
                  setIsOpen={() => handleExperienceCardToggle(index)} // Toggle the card open/close
                  details={item.details}
                  achievements={item.achievements}
                  additionalDetails={item.additionalDetails}
                  additionalImage={item.additionalImage} // Passed image here
                />
              )}

              {activeTab === "Awards" && (
                <ExpandCollapseCard
                  index={index} // Pass the index to identify the card
                  isOpen={expandedAwardsCardIndex === index} // Check if this card is open
                  setIsOpen={() => handleAwardsCardToggle(index)} // Toggle the card open/close
                  details={item.details}
                  achievements={item.achievements}
                  additionalDetails={item.additionalDetails}
                  additionalImage={item.additionalImage} // Passed image here
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

      {/* Pie Chart */}
      {activeTab === "Experience" && <RingChart />}
    </section>
  );
}

export default Experience;

// Expand/Collapse Component for Experience and Awards
const ExpandCollapseCard = ({
  index,
  isOpen,
  setIsOpen,
  details,
  achievements,
  additionalDetails,
  additionalImage,
}: {
  index: number;
  isOpen: boolean;
  setIsOpen: () => void;
  details: string;
  achievements?: string[];
  additionalDetails?: string;
  additionalImage?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Conditionally Render Expand/Collapse Button */}
      {(achievements && achievements.length > 0) || additionalDetails || additionalImage ? (
        <div className="flex justify-end mt-2">
          <button
            onClick={setIsOpen}
            className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white transition-all"
          >
            {isOpen ? "Collapse x" : "Description +"}
          </button>
        </div>
      ) : null}

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        className="overflow-hidden"
      >
        {achievements && achievements.length > 0 && (
          <ul className="list-disc list-inside mt-2 pl-4 text-sm text-gray-200">
            {achievements.map((achievement, i) => (
              <li key={i} className="mb-2">
                {achievement}
              </li>
            ))}
          </ul>
        )}

        {/* Render Additional Details and Image side by side */}
        <div className="mt-4 flex items-center gap-6">
          {additionalImage && (
            <div className="w-[300px] h-[200px]">
              <img
                src={additionalImage}
                alt="Additional Details"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          {additionalDetails && (
            <div className="text-sm italic text-gray-200 flex-1 md:block hidden">{additionalDetails}</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
