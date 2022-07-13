import React from "react";

const WorkspaceCard = ({ cardText, cardHeader, icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-md flex-grow-1 cursor-pointer hover:bg-slate-50 transition-all outline-2 p-5 max-w-[10rem] outline ${
        selected ? " outline-cta" : "outline-slate-300/50"
      }  `}
    >
      <div>{icon}</div>
      <p className="font-bold text-md mt-3">{cardHeader}</p>
      <p className="text-xs mt-1">{cardText}</p>
    </div>
  );
};

export default WorkspaceCard;
