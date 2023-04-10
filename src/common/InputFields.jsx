import React from "react";
import styled from "styled-components";

const Input = ({
  padding,
  margin,
  fontSize,
  border,
  radius,
  width,
  onChange,
  placeholder,
  value,
  type,
  name,
}) => {
  return (
    <InputField
      padding={padding}
      margin={margin}
      radius={radius}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
      type={type} 
      width={width}
      border={border}
      fontSize={fontSize}
    />
  );
};

export default Input;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  box-shadow: ${({ theme }) => theme.inputBoxShadow};
  width: ${({ width }) => (width ? width : null)};
  border: ${({ border }) => (border ? border : "none")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  outline: none;
  text-align: center;

  &::placeholder {
    ${({ placeholder }) => (placeholder ? placeholder : "")}
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    color: #a6a6a6;
  }
`;
