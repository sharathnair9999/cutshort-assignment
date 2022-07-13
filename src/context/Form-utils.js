export const initialFormState = {
  nameSection: {
    isComplete: false,
    fullName: "",
    displayName: "",
  },
  workspaceSection: {
    isComplete: false,
    name: "",
    url: "",
  },
  planner: {
    isComplete: false,
    myself: true,
    withTeam: false,
  },
};
export const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NAME_FORM_DETAILS":
      let { fullName, displayName } = payload;
      return {
        ...state,
        nameSection: { isComplete: true, fullName, displayName },
      };
    case "SET_WORKSPACE_DETAILS":
      let { name, url } = payload;
      return {
        ...state,
        workspaceSection: { isComplete: true, name, url },
      };
    case "SET_WORK_WITH":
      return {
        ...state,
        planner: {
          ...state.planner,
          myself: payload === "myself" ? true : false,
          withTeam: payload === "withTeam" ? true : false,
        },
      };
    case "SET_PLANNER_COMPLETED":
      return { ...state, planner: { ...state.planner, isComplete: true } };

    default:
      return state;
  }
};
