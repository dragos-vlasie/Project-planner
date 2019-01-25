export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database 
        // passs in the action
        dispatch({type: 'CREATE_PROJECT', project: project });
    }
};