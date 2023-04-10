import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMusics } from "../../redux/actions/songAction";
import { createPlayList } from "../../redux/actions/playListActions";

// common
import Container from "../../common/Container";
import Button from "../../common/Button";

// components
import MusicItem from "../../components/MusicItem";
import PlayListModal from "../../components/PlayListModal";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const MusicsPage = () => {
  const [showPlayListModal, setShowPlayListModal] = useState(false);
  const [showPlayListForm, setShowPlayListForm] = useState(false);

  const [playListFormData, setPlayListFormData] = useState({
    title: "",
    cover: null,
  });

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams(); 
  const create = searchParams.get("create");

  useEffect(() => {
    if(create) {
      setShowPlayListModal(true)
    }
  },[create])

  const musicList = useSelector((state) => state?.song?.songData);
  const colTitle = musicList && Object?.keys(musicList?.items[0]);

  useEffect(() => { 
    if (!showPlayListModal) {
      dispatch(fetchMusics());
    }
  }, [dispatch, showPlayListModal]);

  const createPlayListHandler = () => {
    let formData = new FormData();
    formData.append("title", playListFormData.title);
    formData.append("cover", playListFormData.cover);
    dispatch(createPlayList(formData));
  };

  const fetchMusicStatus = useSelector((state) => state?.song?.getSongStatus);

  return (
    <>
      <Container direction="column" justifyContent="flex-start">
        <h2>Music List</h2>
        <Button
          width="50%"
          padding="1rem"
          margin="2rem auto"
          color="#fff"
          onClick={() => navigate("/playlists")}
        >
          See Playlists
        </Button>
        <Container margin="2rem auto" width="90%">
          {fetchMusicStatus === "pending" ? (
            <Container direction="column">
              <Audio color="#00817A" />
              <h2>Receiving musics</h2>
            </Container>
          ) : (
            <TableContainer component={Container} dir="left">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {colTitle?.map((title, index) => (
                      <TableCell key={index} align="left">
                        {title}
                      </TableCell>
                    ))}
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{}}>
                  {musicList?.items?.map((item) => (
                    <MusicItem
                      key={item.id}
                      showPlayListModal={showPlayListModal}
                      setShowPlayListModal={setShowPlayListModal}
                      item={item}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </Container>

      {showPlayListModal && (
        <PlayListModal
          createPlayListHandler={createPlayListHandler}
          playListFormData={playListFormData}
          setPlayListFormData={setPlayListFormData}
          showPlayListForm={showPlayListForm}
          setShowPlayListForm={setShowPlayListForm}
          setShowPlayListModal={setShowPlayListModal}
        />
      )}
    </>
  );
};

export default MusicsPage;
