import React from "react";
import styled from "styled-components";
import Intro from "./components/intro";

import green from "./assets/green.jpg";
import stairs from "./assets/stairs.jpg";

function Presenter() {
  return (
    <Container>
      <Intro />
      <StickyCont>
        <Sticky>
          <Img src={green} />
          <Content>한국에서 가장 따스한 저희 동네를 소개합니다</Content>
        </Sticky>
      </StickyCont>
      <StickyCont>
        <Sticky>
          <Content>가나다라</Content>
          <Img src={stairs} />
        </Sticky>
      </StickyCont>
      <Block />
    </Container>
  );
}

export default Presenter;

const Container = styled.div`
  max-width: 100%;
  min-height: 200vh;
`;

const StickyCont = styled.section`
  width: 100%;
  height: 130vh;

  position: relative;
  display: flex;
`;

const Sticky = styled.div`
  width: 100%;
  height: 100vh;

  position: sticky;
  top: 0;

  display: flex;
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
`;

const Content = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
`;

const Block = styled.div`
  width: 100%;
  height: 10vh;
`;
