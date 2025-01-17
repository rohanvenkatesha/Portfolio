// components/CircularProgressBar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

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

export default CircularProgressBar;
