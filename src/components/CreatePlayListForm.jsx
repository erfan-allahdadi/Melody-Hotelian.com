import React, { useEffect } from 'react';
import Button from '../common/Button';

// common components
import Container from '../common/Container';
import { InputField } from '../common/InputFields';
import Typography from '../common/Typography';
import { Wrapper } from './PlayListModal'; 
import { useSelector } from 'react-redux';

import { Audio } from "react-loader-spinner";

const CreatePlayListForm = ({playListFormData, changeHandler, createPlayListHandler, setShowPlayListForm}) => {

  const createPlayListStatus = useSelector(state => state?.playList?.createPlayListStatus);

  // useEffect(() => {
  //   if(createPlayListStatus === 'success') { 
  //     setShowPlayListForm(false)
  //   }
  // }, [createPlayListStatus, setShowPlayListForm])


    return (
        <Wrapper>
                <Container gap="1rem" margin="1rem auto">
                  <Typography>title</Typography>
                  <InputField
                    value={playListFormData?.title}
                    name="title"
                    onChange={changeHandler}
                    type="text"
                  />
                </Container>

                <Container gap="1rem" margin="1rem auto">
                  <Typography>cover</Typography>
                  <InputField
                    // value={playListFormData?.cover}
                    name="cover"
                    onChange={changeHandler}
                    type="file"
                  />
                </Container>

                <Container>
                {
                  createPlayListStatus === 'pending' ? <Audio width={50} height={50} /> : <Button
                    margin="1rem"
                    width="10%"
                    borderRadius="1rem"
                    color="#fff"
                    onClick={createPlayListHandler}
                  >
                    send
                  </Button>
                }
                  
                </Container>
              </Wrapper>
    );
}

export default CreatePlayListForm;
