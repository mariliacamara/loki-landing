import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Card from "../../components/Card";
import LokiBg from "../../assets/images/loki-bg.png";

const LandingPage = styled.section`
  font-family: var(--font-loki);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background: url(${LokiBg}) top center no-repeat;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

const Container = styled.section`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
`;

export default function Content() {
  return (
    <>
      <LandingPage>
        <Container>
          <Header></Header>
          <Card></Card>
        </Container>
      </LandingPage>
    </>
  );
}
