import React from "react";
import { useForm } from "../context/Form-Context";

const Tracker = () => {
  const { state, allLevels, setCurrentLayout } = useForm();
  const levelsCompleted = [];
  Object.values(state).forEach((level) =>
    levelsCompleted.push(level.isComplete)
  );
  const allCompleted = levelsCompleted.every((level) => level === true);

  return (
    <div className="flex gap-20">
      {levelsCompleted.map((eachLevel, ind, arr) => (
        <div
          onClick={() => setCurrentLayout(allLevels[ind])}
          key={ind}
          className={`cursor-pointer each_level relative after:bg-slate-200 after:content-[' '] after:cursor-default after:w-20 after:h-[2px] after:absolute after:left-full ${
            ind === 0 || arr[ind - 1]
              ? `bg-cta text-white before:bg-cta before:content-[' '] before:z-10 before:cursor-default ${
                  eachLevel ? "before:w-20" : "before:w-10"
                }  before:h-[2px] before:absolute before:left-full`
              : "bg-white text-cta border-slate-200  outline-1 outline outline-slate-200 "
          } text-sm p-4 flex justify-center items-center w-8 h-8 rounded-full font-light`}
        >
          {ind + 1}
        </div>
      ))}
      <div
        className={`cursor-pointer each_level  ${
          allCompleted
            ? "bg-cta text-white "
            : "bg-white text-cta border-slate-200 outline-1 outline outline-slate-200"
        } text-sm p-4 flex justify-center items-center w-8 h-8 rounded-full font-light`}
      >
        {levelsCompleted.length + 1}
      </div>
    </div>
  );
};

export default Tracker;
