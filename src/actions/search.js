import * as api from '../api';



export const searchUsers = (query) => async (dispatch) => {
  try {
    const { data } = await api.fetchUsersByName(query); 
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};


export const getUserById = (query) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserProfileByID(query); 
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};



