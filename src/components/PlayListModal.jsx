import React, { useEffect, useState } from "react";

import styled from "styled-components";

// common
import Container from "../common/Container";
import Button from "../common/Button";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayList } from "../redux/actions/playListActions";

// components
import PlayListItem from "./PlayListItem";
import CreatePlayListForm from "./CreatePlayListForm";
import { Audio } from "react-loader-spinner";
import {  useNavigate, useSearchParams } from "react-router-dom";

const PlayListModal = ({
  setShowPlayListModal, 
  showPlayListForm,
  setShowPlayListForm,
  playListFormData,
  setPlayListFormData,
  createPlayListHandler,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const playList = useSelector((state) => state?.playList?.playLists);

  useEffect(() => {
    if(!showPlayListForm){
      dispatch(fetchPlayList());
    }
  }, [dispatch, showPlayListForm]);

  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      let file = e.target.files[0];
      setPlayListFormData({
        ...playListFormData,
        cover: file,
      });
    } else {
      setPlayListFormData({
        ...playListFormData,
        [name]: value,
      });
    }
  };

  const fetchPlayListStatus = useSelector(
    (state) => state?.playList?.getPlayListStatus
  );

  const [searchParams, setSearchParams] = useSearchParams(); 
  const create = searchParams.get("create");

  return (
    <Modal>
      {fetchPlayListStatus === "pending" ? (
        <Container
          margin="5% auto"
          padding="1rem"
          width="80%"
          height="50vh"
          direction="column"
        >
          <Audio color="#00817A" />
        </Container>
      ) : (
        <Container
          margin="5% auto"
          padding="1rem"
          width="80%"
          direction="column"
        >
          {
            !create && <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              setShowPlayListModal(false);
              setShowPlayListForm(false);
              window.location.reload();
            }}
          >
            X
          </span> 
          }
          <h2>play lists</h2>
          {
            create && <Btn onClick={() => {
              navigate('/musics');
              setShowPlayListModal(false);
            }}>Select music to add playList</Btn>
          }
          {playList?.items?.length === 0 ? (
            <>
              <h5 style={{ color: "red" }}>There are no playlists</h5>
              {showPlayListForm && (
                <CreatePlayListForm
                  playListFormData={playListFormData}
                  changeHandler={changeHandler}
                  createPlayListHandler={createPlayListHandler}
                />
              )}
              {/* <Button
                width="20%"
                color="#fff"
                padding="0.5rem"
                borderRadius="1rem"
                onClick={() => setShowPlayListForm(!showPlayListForm)}
              >
                {showPlayListForm ? "close form" : "create new playList"}
              </Button> */}
            </>
          ) : (
            playList?.items?.map((playList) => (
              <>
                {/* <h3>Which playlist do you add the desired song to?</h3> */}
                <Container margin="1rem auto">
                  <PlayListItem
                    setShowPlayListModal={setShowPlayListModal}
                    playList={playList}
                  />
                </Container> 
              </>
            ))
          )}
          {(showPlayListForm && playList?.items?.length !== 0) && (

<CreatePlayListForm
  playListFormData={playListFormData}
  changeHandler={changeHandler}
  createPlayListHandler={createPlayListHandler}
  setShowPlayListForm={setShowPlayListForm}
/>
)}
          <Button
                  width="20%"
                  color="#fff"
                  padding="0.5rem"
                  borderRadius="1rem"
                  onClick={() => setShowPlayListForm(!showPlayListForm)}
                >
                  {showPlayListForm ? "close form" : "create new playList"}
                </Button>
        </Container>
      )}
    </Modal>
  );
};

export default PlayListModal;

export const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  transition: all ease 0.3s;
`;

export const Wrapper = styled.div`
  border: 1px solid red;
  width: 80%;
  margin: 2rem;
`;

const Btn = styled.button`
    border:none;
    outline:none;
    background-color:red;
    color: #fff;
    font-weight:bold;
    /* padding:1rem; */
    cursor: pointer;
`

