// Experience.tsx
"use client"
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { timelineData, TabKey, TimelineItem } from "@/constants/timelineData";  // Import data

const CircularProgressBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
  const percentage = (value / maxValue) * 100;
  const radius = 30; // radius of the circle
  const stroke = 4; // width of the stroke
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-start relative">
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
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      {/* GPA text in the center of the circle */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-[12px] font-semibold text-lg">
        {value} / { maxValue}
      </div>
    </div>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeTab, setActiveTab] = useState<TabKey>("Education");

  const tabs: TabKey[] = ["Education", "Experience", "Awards and Activities"];

  return (
<section
  className="montserrat-reg w-full h-auto flex flex-col items-center justify-center relative gap-8 py-20 text-white"
  id="experience"
>
      <StarryBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <h1 className="montserrat-hero text-[40px] cursor-pointer bg-gradient-right py-10">
          Experience
        </h1>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 border-b-2 ${activeTab === tab ? "border-b-white" : "border-b-transparent"} transition-all`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="w-full max-w-4xl">
        {timelineData[activeTab].map((item, index) => (
          <div key={index} className="flex flex-row gap-4 mb-6 border-l-4 border-gray-400 pl-4">
            {/* GPA Circular Progress Bar on the left */}
            {item.gpa && item.maxGpa && (
              <div className="flex items-center justify-start">
                <CircularProgressBar value={item.gpa} maxValue={item.maxGpa} />
              </div>
            )}
            
            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-sm">{item.date}</span>
              <p className="text-sm">{item.details}</p>

              {/* Additional Details (e.g., for Insta Award) */}
              {item.additionalDetails && (
                <p className="text-sm mt-2 italic">{item.additionalDetails}</p>
              )}

              {/* Achievements (if available) */}
              {item.achievements && (
                <ul className="list-disc list-inside mt-2 text-sm">
                  {item.achievements.map((achievements, i) => (
                    <li key={i}>{achievements}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
