import * as api from "../../server/index";

export const fetchMusics = () => async (dispatch) => {
    dispatch({ type: "GET_SONG_PENDING" });
  try {
    const { data } = await api.getSong();
    dispatch({ type: "GET_SONG_SUCCESS", payload: data?.result });
  } catch (error) {
    console.log("error in catch of fetch song action", error);
    dispatch({ type: "GET_SONG_ERROR", payload: error });
  }
}

export const saveSongID = (id) => {
  return {
    type: 'SAVE_ID',
    payload: id
  }
}