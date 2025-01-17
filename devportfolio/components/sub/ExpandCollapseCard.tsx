// components/ExpandCollapseCard.tsx
import React from "react";
import { motion } from "framer-motion";

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

export default ExpandCollapseCard;
