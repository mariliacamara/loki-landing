import React from "react";
import styled from "styled-components";


const HeaderTitle = styled.h1`
  margin-top: 35px;
  font-size: 96px;
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (max-width: 450px) {
    margin-top: 10px;
    font-size: 46px;
  }
`;
const HeaderSubtitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`;

export default function Header() {
  return (
    <div>
      <HeaderSubtitle>Está disponível agora!</HeaderSubtitle>
      <HeaderTitle>Loki</HeaderTitle>
    </div>
  );
}