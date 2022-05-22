import React from "react";
import styled from "styled-components";
import FOFImage from "../assets/404.svg";

const FoFContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 50%
  }
`;

const Error = () => {
    return <>
      <FoFContainer>
        <img src={FOFImage} alt="Invalid route" />
      </FoFContainer>
    </>;
};

export default Error;
