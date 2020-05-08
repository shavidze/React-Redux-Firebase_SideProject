import { firestore } from "firebase";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    console.log("firebase", firebase);
    firebase
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Saba",
        authorLastName: "Shavidze",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => dispatch({ type: "CREATE_PROJECT", payload: project }))
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", payload: err });
      });
  };
};
