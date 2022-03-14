import React from "react";
import styled from "styled-components";
import CardInfos from './CardInfos';
import Poster from "../assets/images/poster.png";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4vw;
`;
const CardPoster = styled.div`
  
`;

export default function Card() {
  return (
    <CardWrapper>
      <CardPoster>
        <img src={Poster} alt="Poster" />
      </CardPoster>
      <CardInfos></CardInfos>
    </CardWrapper>
  );
}
