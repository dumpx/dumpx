import React from "react";
import styled from "styled-components";

const FoF = styled.h2`
  text-align : center;
  font-family: Monospace;
`;

const Error = () => {
    return <>
      <div className="container">
        <FoF>404</FoF>
      </div>
    </>;
};

export default Error;
