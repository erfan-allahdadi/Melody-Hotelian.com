import axios from "axios";


const MELODY_API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: "",
  },
});


let refreshing_token = null;

MELODY_API.interceptors.request.use((config) => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const { access_token } = JSON.parse(userData);
    config.headers["authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

MELODY_API.interceptors.response.use(
  (res) => {
    if (res?.data?.result?.message) {
      alert(res?.data?.result?.message);
    }
    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const refreshing_token = refresh_token();
      return refreshing_token.then((res) => {
        const acc = res?.data?.result?.access_token;
        if (acc) {
          const user = JSON.parse(localStorage.getItem("userData"));
          const newUser = { ...user, access_token: acc };
          localStorage.setItem("userData", JSON.stringify(newUser));
          MELODY_API.defaults.headers.common["authorization"] = acc;
          return MELODY_API(error.config);
        } else {
          window.location.href = "/";
        }
      }).catch((err) => {
        localStorage.clear()
        window.location.href = "/";
        return Promise.reject(err);
      });
    }
    return Promise.reject(error);
  }
);

const refresh_token = () => {
  const res = axios.post( "http://example.com/refresh",{},
    {
      headers: {
        'authorization':  JSON.parse(localStorage.getItem("userData"))?.refreshToken,
      },
    }
  );
  console.log("res", res);
  return res
}

// auth API
export const registerUser = (userData) =>  MELODY_API.post("/site/register", userData);
export const loginUser = (userData) =>  MELODY_API.post("/site/login", userData);

// music API
export const getSong = () => MELODY_API.get("/song");

// play list API
export const getPlayLists = () => MELODY_API.get('/playlist');
export const createPlayList = (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return MELODY_API.post("/playlist", formData, config);
};
export const addSongToPlayList = (songID, playlistID) => MELODY_API.post(`/playlist/add-song/${playlistID}`, songID)
export const removeSongFromPlayList = (songID, playlistID) => MELODY_API.delete(`/playlist/add-song/${playlistID}`, songID)
export const deletePLayList = (playListID) => MELODY_API.delete(`/playlist/${playListID}`)
  


