import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function OutlineButt({
  label,
  onClick,
  className = "",
  type = "button",
  icon,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 border border-cyan-600 text-black hover:bg-cyan-800 px-6 py-3 rounded-full font-medium transition-all duration-300 ${className}`}
    >
      {label}
      <span className="bg-white text-cyan-800 rounded-full p-1">
        {icon || <ArrowUpRight size={16} />}
      </span>
    </button>
  );
}
