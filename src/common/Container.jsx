import React from "react";
import styled from "styled-components";

const Container = ({
  children, display, direction, justifyContent, alignItems, width, height, padding, margin, gap
}) => {
  return (
    <ContainerBox
     display={display}
     direction={direction}
     justifyContent={justifyContent}
     alignItems={alignItems}
     width={width}
     height={height}
     padding={padding}
     margin={margin}
     gap={gap}
    >
      {children}
    </ContainerBox>
  );
};

export default Container;

export const ContainerBox = styled.div`
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  gap: ${({ gap }) => (gap ? gap : null)};
  background-color: ${({theme}) => theme.backgroundContainer};
  box-shadow: ${({ theme }) => theme.lightCardShadow};
`