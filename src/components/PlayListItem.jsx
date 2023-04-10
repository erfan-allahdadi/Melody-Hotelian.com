import React, { useEffect } from "react";
import { useNavigate } from "react-router";

// common
import styled from "styled-components";
import Button from "../common/Button";
import Container from "../common/Container";

import { Audio } from 'react-loader-spinner';

// redux
import { useDispatch, useSelector } from "react-redux";
import { addToPlayListAction, deletePlayListAction } from "../redux/actions/playListActions";
import { useSearchParams } from "react-router-dom";

const PlayListItem = ({ playList, setShowPlayListModal }) => { 

  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const [searchParams, setSearchParams] = useSearchParams(); 
  const create = searchParams.get("create");

  const songID = useSelector((state) => state?.song?.songID);

  const addPlayListStatus = useSelector((state) => state?.playList?.addPlayListStatus);
  const deletePlayListStatus = useSelector((state) => state?.playList?.deletePlayListStatus);
  
  const addToPlayListHandler = () => {
    dispatch(addToPlayListAction({song_id: songID}, playList?.id));
  }

  useEffect(() => {
    addPlayListStatus === 'success' && setShowPlayListModal(false);
    // deletePlayListStatus === 'success' && setShowPlayListModal(false);

  }, [addPlayListStatus, setShowPlayListModal, deletePlayListStatus])

  return (
    <PlayListContainer>
        <img src={playList?.cover} width='20%' alt="plyListCover" />
        <p>{playList?.title}</p>
        {
          !create && <Button onClick={addToPlayListHandler}>add to play list</Button>
        }
        
        <Button onClick={() => navigate(`/playlists/${playList?.id}`)} color='#fff'>See playList</Button>
        {
          deletePlayListStatus === 'pending' ? <Audio width={50} height={50} /> : <Button onClick={() => dispatch(deletePlayListAction(playList?.id))}>delete playList</Button>

        }
    </PlayListContainer>
  )
};

export default PlayListItem;

export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width:80%;
  padding: 1rem;
`
