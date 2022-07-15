import React from "react";
import { useForm } from "../context/Form-Context";

const Tracker = () => {
  const { state, allLevels, setCurrentLayout } = useForm();
  const levelsCompleted = [];
  Object.values(state).forEach((level) =>
    levelsCompleted.push(level.isComplete)
  );
  const allCompleted = levelsCompleted.every((level) => level === true);
  const openSuccessLayout = () => {
    if (!allCompleted) {
      return;
    }
    setCurrentLayout("successPage");
  };

  const levelClickValidator = (ind, arr) => {
    arr.slice(0, ind).every((level) => level === true)
      ? setCurrentLayout(allLevels[ind])
      : alert("Complete the previous Form(s)");
  };

  return (
    <div className="flex md:gap-16 gap-12">
      {levelsCompleted.map((eachLevel, ind, arr) => (
        <div
          onClick={() => levelClickValidator(ind, arr)}
          key={ind}
          className={`cursor-pointer font-medium transition-all each_level relative after:bg-slate-200 after:content-[' '] after:cursor-default md:after:w-16 after:w-12 after:h-[2px] after:absolute after:left-full ${
            ind === 0 || arr[ind - 1]
              ? `bg-cta text-white before:bg-cta before:content-[' '] before:z-10 before:cursor-default ${
                  eachLevel
                    ? "md:before:w-16 before:w-12"
                    : "md:before:w-8 before:w-6"
                }  before:h-[2px] before:absolute before:left-full`
              : "bg-white text-black  border-slate-200  outline-1 outline outline-slate-200 "
          } md:text-sm text-xs p-4 flex justify-center items-center w-10 h-10 rounded-full font-light`}
        >
          {ind + 1}
        </div>
      ))}
      <div
        onClick={openSuccessLayout}
        className={`cursor-pointer each_level font-medium transition-all ${
          allCompleted
            ? "bg-cta text-white "
            : "bg-white text-black border-slate-200 outline-1 outline outline-slate-200"
        } md:text-sm text-xs p-4 flex justify-center items-center w-10 h-10 rounded-full font-light`}
      >
        {levelsCompleted.length + 1}
      </div>
    </div>
  );
};

export default Tracker;
