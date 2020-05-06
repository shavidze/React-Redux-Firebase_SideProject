export const createProject = (project) => {
  return (dispatch, getState) => {
    console.log("create project action", project);
    dispatch({ type: "CREATE_PROJECT", payload: project });
  };
};
