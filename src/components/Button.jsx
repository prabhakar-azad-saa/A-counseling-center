import React from "react";
import Colors from "./Colors";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`inline-flex items-center justify-center min-w-[221px] h-[60px] gap-2 text-[22px] sm:text-[18px] font-medium text-white rounded-[30px] pt-[15px] pr-[50px] pb-[15px] pl-[50px] active:scale-95 transition-transform duration-150 hover:bg-teal-600 ${className}`}
      onClick={onClick}
      style={{ backgroundColor: Colors.secondary }}
    >
      {children}
    </button>
  );
};

export default Button;
