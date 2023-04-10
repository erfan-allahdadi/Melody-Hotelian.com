const initialState = {
  songData: null,
  getSongStatus: "idle",
  songID: null
};

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SONG_PENDING":
      return { getSongStatus: "pending" };

    case "GET_SONG_SUCCESS":
      return { getSongStatus: "success", songData: action.payload };

    case "GET_SONG_ERROR":
      return { getSongStatus: "error", songData: action.payload };

    case "SAVE_ID":
      return {songID : action.payload}
      
    default:
      return state;
  }
};
