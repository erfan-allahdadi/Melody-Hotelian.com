import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  onClick,
  fontSize,
  color,
  bgColor,
  width,
  margin,
  padding,
  border,
  borderRadius,
}) => {
  return (
    <Container
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      width={width}
      margin={margin}
      padding={padding}
      border={border}
      borderRadius={borderRadius}

      onClick={onClick}
    >
      {children}
    </Container>
  );
};
export default Button;

export const Container = styled.button`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: ${({ color }) => (color ? color : "black")};
  background-color: ${({ theme }) => (theme.melodyButtonColor)};
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : null)};
  cursor: pointer
`;
