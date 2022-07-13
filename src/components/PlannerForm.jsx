import React from "react";
import Team from "../assets/Team";
import { useForm } from "../context/Form-Context";
import Button from "./Button";
import WorkspaceCard from "./WorkspaceCard";

const PlannerForm = () => {
  const {
    workWithHandler,
    setPlannerCompleted,
    setCurrentLayout,
    state: {
      planner: { withTeam, myself },
    },
  } = useForm();

  const handlePlanner = () => {
    setPlannerCompleted();
    setCurrentLayout("successPage");
  };

  return (
    <div>
      <p className="md:text-3xl text-2xl font-bold">
        How are you planning to use Eden?
      </p>
      <p className="text-center mt-3 font-medium md:text-sm text-xs text-slate-500">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="flex justify-center items-center gap-4 mt-8">
        <WorkspaceCard
          onClick={() => workWithHandler("myself")}
          selected={myself}
          cardText={"Write better. Think more clearly. Stay organized"}
          cardHeader={"For myself"}
          icon={<Team fill={myself} />}
        />
        <WorkspaceCard
          onClick={() => workWithHandler("withTeam")}
          cardText={"Wikis, docs, tasks & projects, all in one place."}
          cardHeader={"With my team"}
          icon={<Team fill={withTeam} />}
          selected={withTeam}
        />
      </div>
      <div className="mt-5 text-center">
        <Button clickHandler={handlePlanner} />
      </div>
    </div>
  );
};

export default PlannerForm;
