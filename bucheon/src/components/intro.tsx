import React from "react";
import styled from "styled-components";

import intro from "../assets/intro.jpg";

function Intro() {
  return (
    <Container>
      <Background src={intro} />
    </Container>
  );
}

export default Intro;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
`;
