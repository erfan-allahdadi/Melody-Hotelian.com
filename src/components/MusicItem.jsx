import React from "react";

// MUI component
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { saveSongID } from "../redux/actions/songAction";

const MusicItem = ({ item, showPlayListModal, setShowPlayListModal }) => {
  
  const dispatch = useDispatch()

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.album_name}</TableCell>
      <TableCell>{item?.artist_name}</TableCell>
      <TableCell>{item?.duration}</TableCell>
      <TableCell>{item?.title}</TableCell>
      <TableCell>{item?.year}</TableCell>
      <TableCell>
        <a href={item?.file}>download</a>
      </TableCell>
      <TableCell>{item?.format}</TableCell>
      <TableCell>
        <Button
          color="#fff"
          borderRadius="1rem"
          padding="0.5rem 0"
          onClick={() => {
            setShowPlayListModal(true);
            dispatch(saveSongID(item?.id))
          }}
        >
          add to playList
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MusicItem;
