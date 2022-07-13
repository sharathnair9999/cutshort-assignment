import React from "react";

const Button = ({ btnText = "Create Workspace", clickHandler, className }) => {
  return (
    <button
      type="submit"
      onClick={clickHandler}
      className={`w-full max-w-sm py-3 text-white text-sm rounded-md bg-cta hover:bg-cta/95 transition-all hover:shadow-md ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
