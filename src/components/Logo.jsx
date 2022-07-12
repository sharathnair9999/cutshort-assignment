import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <img src="/logo.jpg" alt="logo" className="w-6 h-6 mb-1 object-cover" />
      <span className="text-2xl font-bold">Eden</span>
    </div>
  );
};

export default Logo;
