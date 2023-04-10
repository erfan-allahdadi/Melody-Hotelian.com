import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayList, removeSongFromPlayListAction } from "../../redux/actions/playListActions";

// common
import Container from "../../common/Container";

// MUI
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Audio } from "react-loader-spinner";
import styled from "styled-components";

const PlayListDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const playListArray = useSelector(
    (state) => state?.playList?.playLists?.items
  );

  const playList = playListArray?.filter(
    (playList) => playList.id === +params?.id
  );

  useEffect(() => {
    dispatch(fetchPlayList());
  }, [dispatch]);

  return (
    <Container>
      {playList ? (
        <Container direction="column" justifyContent="flex-start">
          <img
            style={{ border: "1px solid red" }}
            width="40%"
            src={playList[0]?.cover}
            alt=""
          />
          <h2>Songs</h2>
          {
            playList[0]?.songs.length === 0 ? <Container direction='column'>
            <p>No Song</p>
            <Button onClick={() => navigate('/musics')}>Back to Add song</Button>
            </Container> :
            playList[0]?.songs?.map((song) => (
              <Container justifyContent='flex-start'>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{song?.id}</TableCell>
                  <TableCell>{song?.album_name}</TableCell>
                  <TableCell>{song?.artist_name}</TableCell>
                  <TableCell>{song?.duration}</TableCell>
                  <TableCell>{song?.title}</TableCell>
                  <TableCell>{song?.year}</TableCell>
                  <TableCell><a href={song?.file}>download</a></TableCell>
                  <TableCell>{song?.format}</TableCell>
                </TableRow>
                <Button width='10%' onClick={() => dispatch(removeSongFromPlayListAction({song_id: song?.id}, playList[0]?.id))}>delete</Button>
              </Container>
            ))
          }
        </Container>
      ) : (
        <Container height="100vh">
          <Audio />
        </Container>
      )}
    </Container>
  );
};

export default PlayListDetails;

const Button = styled.button`
    border:none;
    outline:none;
    background-color:red;
    color: #fff;
    font-weight:bold;
    /* padding:1rem; */
    cursor: pointer;
`
