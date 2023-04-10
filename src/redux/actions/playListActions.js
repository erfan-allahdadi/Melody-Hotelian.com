import * as api from "../../server/index";

export const fetchPlayList = () => async (dispatch) => {
    dispatch({ type: "GET_PLAYLIST_PENDING" });
    try {
      const { data } = await api.getPlayLists();
      dispatch({ type: "GET_PLAYLIST_SUCCESS", payload: data?.result });
    } catch (error) {
      console.log("error in catch of getPlayList action", error);
      dispatch({ type: "GET_PLAYLIST_ERROR", payload: error?.response });
    }
};

export const createPlayList = (formData) => async (dispatch) => {
  dispatch({ type: "CREATE_PLAYLIST_PENDING" });
  try {
    const { data } = await api.createPlayList(formData);
    dispatch({ type: "CREATE_PLAYLIST_SUCCESS", payload: data?.result });
    alert('با موفقیت ساخته شد');
    dispatch(fetchPlayList());
  } catch (error) {
    console.log("error in catch of createPlayList action", error);
    dispatch({ type: "CREATE_PLAYLIST_ERROR", payload: error?.response });
  }
}

export const addToPlayListAction = (songID, playlistID) => async (dispatch) => {
  dispatch({ type: "ADD_PLAYLIST_PENDING" });
  try {
    const { data } = await api.addSongToPlayList(songID, playlistID);
    dispatch({ type: "ADD_PLAYLIST_SUCCESS", payload: data?.result });
    alert('با موفقیت اضافه شد');
    // window.location.reload();
  } catch (error) {
    console.log("error in catch of addPlayList action", error);
    dispatch({ type: "ADD_PLAYLIST_ERROR", payload: error?.response });
  }
}

export const removeSongFromPlayListAction = (songID, playlistID) => async (dispatch) => {
  dispatch({ type: "REMOVE_PLAYLIST_PENDING" });
  try {
    const { data } = await api.removeSongFromPlayList(songID, playlistID);
    dispatch({ type: "REMOVE_PLAYLIST_SUCCESS", payload: data?.result });
    alert('با موفقیت اضافه شد');
    // window.location.reload();
  } catch (error) {
    console.log("error in catch of remove from PlayList action", error);
    dispatch({ type: "REMOVE_PLAYLIST_ERROR", payload: error?.response });
  }
}


export const deletePlayListAction = (playListID) => async (dispatch) => {
  dispatch({ type: "DELETE_PLAYLIST_PENDING" });
  try {
    const { data } = await api.deletePLayList(playListID);
    dispatch({ type: "DELETE_PLAYLIST_SUCCESS", payload: data?.result });
    alert('با موفقیت حذف شد');
    dispatch(fetchPlayList());
    // window.location.reload();
  } catch (error) {
    console.log("error in catch of deletePlayList action", error);
    dispatch({ type: "DELETE_PLAYLIST_ERROR", payload: error?.response });
  }
}