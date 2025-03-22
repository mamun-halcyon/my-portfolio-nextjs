import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full relative px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 
      hover:bg-blue-700 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-400 
      dark:bg-blue-500 dark:hover:bg-blue-600"
    >
      {text}
      {/* Animated Hover Effect */}
      <span className="absolute inset-0 w-full h-full bg-blue-400 opacity-20 rounded-lg transition-all duration-300 transform scale-0 hover:scale-100"></span>
    </button>
  );
};

export default AnimatedButton;
