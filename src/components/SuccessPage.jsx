import React from "react";
import { useForm } from "../context/Form-Context";
import Button from "./Button";

const SuccessPage = () => {
  const {
    state: {
      nameSection: { displayName },
    },
  } = useForm();
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <span className="flex justify-center items-center  rounded-full text-md bg-cta text-white w-14 h-14 mt-6">
        &#10004;
      </span>
      <p className="text-3xl font-bold mt-5">{`Congratulations, ${
        displayName[0].toUpperCase() + displayName.substring(1)
      }!`}</p>
      <p className="text-center mt-2 font-medium text-sm text-slate-500">
        You've completed onboarding, you can start using the Eden!
      </p>
      <Button btnText="Launch Eden" className={"mt-4"} />
    </div>
  );
};

export default SuccessPage;
