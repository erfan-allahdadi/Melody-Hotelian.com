import React from "react";
import { useNavigate } from "react-router";
import Button from "../common/Button";
import Container from "../common/Container";
import { PlayListContainer } from "../components/PlayListItem";

const PlayListTemplate = ({ playList }) => {
  const navigate = useNavigate();
  console.log(playList);
  return (
    <Container height="50vh" alignItems="flex-start" padding="1rem">
      <PlayListContainer>
        <img src={playList?.cover} width='20%' alt="plyListCover" />
        <p>{playList?.title}</p>
        {/* <Button onClick={addToPlayListHandler}>add</Button> */}
        <Button
          onClick={() => navigate(`/playlists/${playList?.id}`)}
          color="#fff"
        >
          See playList
        </Button>
      </PlayListContainer>
    </Container>
  );
};

export default PlayListTemplate;
