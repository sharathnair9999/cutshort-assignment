import { createContext, useContext, useReducer, useState } from "react";
import { formReducer, initialFormState } from "./Form-utils";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const allLevels = Object.keys(state);
  const [currentLayout, setCurrentLayout] = useState(allLevels[0]);

  const value = { state, dispatch, allLevels, currentLayout, setCurrentLayout };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useForm = () => useContext(FormContext);

export { useForm, FormProvider };
