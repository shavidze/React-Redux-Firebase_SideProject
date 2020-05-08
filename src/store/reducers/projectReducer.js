const initState = {
  projects: [
    { id: "1", title: "i can find your peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: "4",
            title: action.payload.title[0],
            content: action.payload.content[0],
          },
        ],
      };
    case "CREATE_PROJECT_ERROR":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
  return state;
};
export default projectReducer;
