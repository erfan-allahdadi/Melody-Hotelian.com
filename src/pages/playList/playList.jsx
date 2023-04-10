import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayList } from "../../redux/actions/playListActions";

import PlayListTemplate from "../../template/PlayListTemplate";

import { Audio } from 'react-loader-spinner';

import Button from "../../common/Button";
import Container from "../../common/Container";

import { useNavigate } from "react-router";
 
const PlayList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPlayList());
  }, [dispatch]);

  const playList = useSelector((state) => state?.playList?.playLists);
  const status= useSelector(state => state?.playList?.getPlayListStatus);

  return (
    <Container direction='column'>
      {playList?.items?.length === 0 ? (
        <>
          <h5 style={{ color: "red" }}>There are no playlists</h5>
        </>
      ) : (
        status === 'pending' ? <Audio/> : playList?.items?.map((playList) => (
          <PlayListTemplate playList={playList} />
        ))
      )}
      <Button onClick={() => navigate('/musics?create=playList')} width='50%' padding='1rem' borderRadius='1rem' color='#fff'>Create New Play List</Button>
    </Container>
  );
};

export default PlayList;
