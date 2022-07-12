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
  const { type } = action;
  switch (type) {
    case "":
      return;
    default:
      return state;
  }
};
