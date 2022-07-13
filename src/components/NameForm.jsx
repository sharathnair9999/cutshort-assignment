import React, { useState } from "react";
import { useForm } from "../context/Form-Context";
import { handleChange } from "../utils";
import Button from "./Button";
import InputField from "./InputField";

const NameForm = () => {
  const {
    setCurrentLayout,
    submitNameFormDetails,
    state: { nameSection },
  } = useForm();
  const [nameFormDetails, setNameFormDetails] = useState({
    fullName: nameSection.fullName || "",
    displayName: nameSection.displayName || "",
  });
  const nameFormHandler = (e) => {
    e.preventDefault();
    submitNameFormDetails(nameFormDetails);
    setCurrentLayout("workspaceSection");
  };
  return (
    <div>
      <p className="md:text-3xl text-2xl font-bold">
        Welcome! First things first...
      </p>
      <p className="text-center mt-3 font-medium md:text-sm text-xs text-slate-500">
        You can always change them later.
      </p>
      <form
        onSubmit={nameFormHandler}
        className="mt-14 flex flex-col gap-10 justify-center items-center w-full"
      >
        <InputField
          name="fullName"
          label={"Full Name"}
          value={nameFormDetails.fullName}
          required
          onChange={(e) => handleChange(e, setNameFormDetails)}
          placeholder="Steve Jobs"
        />
        <InputField
          value={nameFormDetails.displayName}
          onChange={(e) => handleChange(e, setNameFormDetails)}
          required
          name="displayName"
          label={"Display Name"}
          placeholder="Steve"
        />
        <Button />
      </form>
    </div>
  );
};

export default NameForm;
