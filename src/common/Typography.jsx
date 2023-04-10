import React from "react";
import styled from "styled-components";

const Typography = ({children, color, size, weight}) => {
    return (
        <Text color={color} size={size} weight={weight} >
        {children}
        </Text>
    )
}

export default Typography;

export const Text = styled.p`
    color: ${({color}) => color ? color : '#000'};
    font-size: ${({size}) => size ? size : '#000'};
    font-weight: ${({weight}) => weight ? weight : '#000'};
    margin: ${({margin}) => margin ? margin : '#000'};
    padding: ${({padding}) => padding ? padding : '#000'};
`