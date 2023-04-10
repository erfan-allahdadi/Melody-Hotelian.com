const initialState = {
  playLists: null,
  getPlayListStatus: "idle",
  addPlayListStatus: "idle",
  createPlayListStatus: 'idle',
  deletePlayListStatus: 'idle'
};

export const playListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PLAYLIST_PENDING":
      return { getPlayListStatus: "pending" };

    case "GET_PLAYLIST_SUCCESS":
      return { getPlayListStatus: "success", playLists: action.payload };

    case "GET_PLAYLIST_ERROR":
      return { getPlayListStatus: "error", playLists: action.payload };



    case "ADD_PLAYLIST_PENDING":
      return { ...state, addPlayListStatus: "pending" };

    case "ADD_PLAYLIST_SUCCESS":
      return { ...state, addPlayListStatus: "success" };

    case "ADD_PLAYLIST_ERROR":
      return { ...state, addPlayListStatus: "error" };


      case "CREATE_PLAYLIST_PENDING":
        return { ...state, createPlayListStatus: "pending" };
  
      case "CREATE_PLAYLIST_SUCCESS":
        return { ...state, createPlayListStatus: "success" };
  
      case "CREATE_PLAYLIST_ERROR":
        return { ...state, createPlayListStatus: "error" };

        case "DELETE_PLAYLIST_PENDING":
        return { ...state, deletePlayListStatus: "pending" };
  
      case "DELETE_PLAYLIST_SUCCESS":
        return { ...state, deletePlayListStatus: "success" };
  
      case "DELETE_PLAYLIST_ERROR":
        return { ...state, deletePlayListStatus: "error" };

    default:
      return state;
  }
};
