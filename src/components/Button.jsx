import React from "react";

const Button = ({ btnText = "Create Workspace", clickHandler, className }) => {
  return (
    <button
      type="submit"
      onClick={clickHandler}
      className={`w-full md:max-w-sm max-w-xs py-3 text-white md:text-sm text-xs rounded-md bg-cta hover:bg-cta/95 transition-all hover:shadow-md ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
