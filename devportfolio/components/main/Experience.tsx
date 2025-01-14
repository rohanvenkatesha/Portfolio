"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { timelineData, TabKey } from "@/constants/timelineData"; // Import data

const CircularProgressBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
  const percentage = (value / maxValue) * 100;
  const radius = 30;
  const stroke = 4;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref); // Trigger animation only once

  useEffect(() => {
    if (isInView) {
      setOffset(circumference - (percentage / 100) * circumference); // Fill progress
    } else {
      setOffset(circumference); // Reset when out of view
    }
  }, [isInView, percentage, circumference]);

  return (
    <div ref={ref} className="flex items-center justify-start relative">
      <svg width={80} height={80} viewBox="0 0 80 80" className="rotate-90">
        {/* Background circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="gray"
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="green"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
      </svg>
      {/* GPA text in the center with smaller font size */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold" style={{ fontSize: '0.8rem' }}>
        {value}
      </div>
    </div>
  );
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabKey>("Education");

  const tabs: TabKey[] = ["Education", "Experience", "Awards and Activities"];

  const ref = useRef(null);
  const isInView_title = useInView(ref);

  return (
    <section
      className="montserrat-reg w-full h-auto flex flex-col items-center justify-center relative gap-8 py-20 text-white"
      id="timeline">
      <StarryBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView_title ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="montserrat-hero text-[40px] cursor-pointer bg-gradient-right py-10">
          Timeline
        </h1>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-6 mb-8">
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
      {/* Timeline */}
<div className="w-full max-w-4xl">
  {timelineData[activeTab].map((item, index) => (
    <motion.div
      key={index}
      className="flex flex-row gap-6 mb-8 p-6 border-l-4 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-1000"
      initial={{ opacity: 0, y: 50 }} // Start offscreen
      animate={{
        opacity: 1, // Fade in
        y: 0, // Slide up to original position
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2, // Slight delay between cards
      }}
      whileInView={{ opacity: 1, y: 0 }} // Stay in place after animation
      viewport={{ once: true }} // Trigger animation only once
    >
      {/* GPA Circular Progress Bar on the left */}
      {item.gpa && item.maxGpa && (
        <div className="flex items-center justify-start">
          <CircularProgressBar value={item.gpa} maxValue={item.maxGpa} />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <span className="text-sm text-gray-400">{item.date}</span>
        <p className="text-sm text-gray-200">{item.details}</p>

        {/* Additional Details (e.g., for Insta Award) */}
        {item.additionalDetails && (
          <p className="text-sm mt-2 italic text-gray-300">{item.additionalDetails}</p>
        )}

        {/* Achievements (if available) */}
        {item.achievements && (
  <ul className="list-disc list-inside mt-4 text-sm text-gray-300 pl-4"> {/* Increased margin-top and padding-left */}
    {item.achievements.map((achievement, i) => (
      <li key={i} className="mb-2"> {/* Added bottom margin for each list item */}
        {achievement}
      </li>
    ))}
  </ul>
)}
      </div>

      {/* University Logo (for Education) */}
      {activeTab === "Education" && item.logo && (
        <div className="relative flex items-center ml-auto">
          <img
            src={item.logo} // Use logo from the data input
            alt="University Logo"
            className="w-[50px] h-auto" // Adjusted the width to 50px for smaller logo size
          />
        </div>
      )}
    </motion.div>
  ))}
</div>
    </section>
  );
}
