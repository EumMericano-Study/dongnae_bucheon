import React from "react";
import styled from "styled-components";
import Intro from "./components/intro";

function Presenter() {
  return (
    <Container>
      <Intro />
      <StickyCont></StickyCont>
      <StickyCont></StickyCont>
    </Container>
  );
}

export default Presenter;

const Container = styled.div`
  max-width: 100vw;
  min-height: 200vh;
`;

const StickyCont = styled.section`
  width: 100%;
  height: 120vh;

  position: relative;
`;

const Img = styled.img``;
