import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function PrimaryButton({
  label,
  onClick,
  className,
  type = "button",
  icon,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 bg-cyan-600  hover:bg-slate-900 cursor-pointer text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ${className}`}
    >
      {label}
      <span className="bg-white text-cyan-600 rounded-full p-1">
        {icon || <ArrowUpRight size={16} />}
      </span>
    </button>
  );
}
