import React, { useState } from "react";
import { useForm } from "../context/Form-Context";
import { handleChange } from "../utils";
import Button from "./Button";
import InputField from "./InputField";

const WorkspaceForm = () => {
  const {
    setCurrentLayout,
    submitWorkSpaceDetails,
    state: { workspaceSection },
  } = useForm();
  const [workspaceDetails, setWorkSpaceDetails] = useState({
    name: workspaceSection.name || "",
    url: workspaceSection.url || "",
  });
  const workspaceFormHandler = (e) => {
    e.preventDefault();
    submitWorkSpaceDetails(workspaceDetails);
    setCurrentLayout("planner");
  };
  return (
    <div>
      <p className="md:text-3xl text-2xl font-bold">
        Let's setup a home for all your work
      </p>
      <p className="text-center mt-3 font-medium md:text-sm text-xs text-slate-500">
        You can always create another workspace later.
      </p>
      <form
        onSubmit={workspaceFormHandler}
        className="mt-14 flex flex-col gap-10 justify-center items-center w-full max-w-xs md:max-w-md"
      >
        <InputField
          name="name"
          label={"Workspace Name"}
          value={workspaceDetails.name}
          required={true}
          onChange={(e) => handleChange(e, setWorkSpaceDetails)}
          placeholder="Eden"
        />
        <InputField
          value={workspaceDetails.url}
          onChange={(e) => handleChange(e, setWorkSpaceDetails)}
          required={false}
          name="url"
          urlPrefix="www.eden.com/"
          label={"Workspace URL"}
          placeholder="Example"
        />
        <Button />
      </form>
    </div>
  );
};

export default WorkspaceForm;
