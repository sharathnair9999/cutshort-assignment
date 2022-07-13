import { createContext, useContext, useReducer, useState } from "react";
import { formReducer, initialFormState } from "./Form-utils";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const allLevels = Object.keys(state);
  const [currentLayout, setCurrentLayout] = useState(allLevels[0]);

  const submitNameFormDetails = (details) => {
    const { fullName, displayName } = details;
    dispatch({
      type: "SET_NAME_FORM_DETAILS",
      payload: { fullName, displayName },
    });
  };
  const submitWorkSpaceDetails = (details) => {
    const { name, url } = details;
    dispatch({
      type: "SET_WORKSPACE_DETAILS",
      payload: { name, url },
    });
  };

  const workWithHandler = (workWith) => {
    dispatch({ type: "SET_WORK_WITH", payload: workWith });
  };
  const setPlannerCompleted = () => {
    dispatch({ type: "SET_PLANNER_COMPLETED" });
  };

  const value = {
    state,
    dispatch,
    allLevels,
    currentLayout,
    setCurrentLayout,
    submitNameFormDetails,
    submitWorkSpaceDetails,
    workWithHandler,
    setPlannerCompleted,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useForm = () => useContext(FormContext);

export { useForm, FormProvider };
