import React from "react";
import styled from "styled-components";

const CardContent = styled.div`
  width: 100%;
  display: grid;
  gap: 3vh;
`;

const CardSynopsis = styled.p`
  max-width: 45vw;
  text-align: left;
  font-size: 1.2rem;
`;

const CardBtnWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
`;

const ShowDuration = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-content: center;
  gap: 0.4rem;

  svg {
    width: 25px;
  }
`;

const ShowDebut = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ShowRatings = styled.div``;

const WatchBtn = styled.button`
  font-family: var(--font-open);
  font-weight: 700;
  width: 184px;
  height: 52px;
  background-color: var(--blue);
  border: none;
  border-radius: 3px;
  color: #fff;
  text-transform: uppercase;
`;

const TrailerBtn = styled.button`
  font-family: var(--font-open);
  font-weight: 700;
  width: 184px;
  height: 52px;
  background-color: var(--dark);
  border: 1px solid var(--white);
  border-radius: 3px;
  color: 1px solid var(--white);
  text-transform: uppercase;
`;

export default function CardInfos() {
  return (
    <CardContent>
      <CardSynopsis>
        Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
        retoma seu papel como o Deus do Mal em uma nova série que ocorre após os
        eventos de “Vingadores: Endgame”.
      </CardSynopsis>
      <CardDetails>
        <ShowDuration>
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 7.5V15L20 17.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>{" "}
          2h
        </ShowDuration>
        <ShowRatings>
          <svg
            width="236"
            height="40"
            viewBox="0 0 236 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.33334L25.15 13.7667L36.6667 15.45L28.3333 23.5667L30.3 35.0333L20 29.6167L9.7 35.0333L11.6667 23.5667L3.33333 15.45L14.85 13.7667L20 3.33334Z"
              fill="#FFA800"
              stroke="#FFA800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69 3.33334L74.15 13.7667L85.6667 15.45L77.3333 23.5667L79.3 35.0333L69 29.6167L58.7 35.0333L60.6667 23.5667L52.3333 15.45L63.85 13.7667L69 3.33334Z"
              fill="#FFA800"
              stroke="#FFA800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M118 3.33334L123.15 13.7667L134.667 15.45L126.333 23.5667L128.3 35.0333L118 29.6167L107.7 35.0333L109.667 23.5667L101.333 15.45L112.85 13.7667L118 3.33334Z"
              fill="#FFA800"
              stroke="#FFA800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M167 3.33334L172.15 13.7667L183.667 15.45L175.333 23.5667L177.3 35.0333L167 29.6167L156.7 35.0333L158.667 23.5667L150.333 15.45L161.85 13.7667L167 3.33334Z"
              fill="#FFA800"
              stroke="#FFA800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M216 3.33334L221.15 13.7667L232.667 15.45L224.333 23.5667L226.3 35.0333L216 29.6167L205.7 35.0333L207.667 23.5667L199.333 15.45L210.85 13.7667L216 3.33334Z"
              fill="white"
              fill-opacity="0.5"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ShowRatings>
        <ShowDebut>2021</ShowDebut>
      </CardDetails>
      <CardBtnWrapper>
        <WatchBtn>Assistir agora</WatchBtn>
        <TrailerBtn>Trailer</TrailerBtn>
      </CardBtnWrapper>
    </CardContent>
  );
}
