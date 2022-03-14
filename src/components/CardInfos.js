import React, { useState } from "react";
import styled from "styled-components";
import ModalVideo from "react-modal-video";
import ReactStars from "react-rating-stars-component";

const CardContent = styled.div`
  width: 100%;
  display: grid;
  gap: 3vh;
`;

const CardSynopsis = styled.p`
  text-align: center;
  font-size: 1.2rem;

  @media screen and (min-width: 854px) {
    max-width: 45vw;
    text-align: left;
  }
`;

const CardBtnWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }

  @media screen and (min-width: 854px) {
    justify-content: start;
  }
`;

const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }

  @media screen and (min-width: 854px) {
    justify-content: start;
  }
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

const WatchBtn = styled.a`
  font-family: var(--font-open);
  font-weight: 700;
  width: 184px;
  height: 52px;
  background-color: var(--blue);
  border: none;
  border-radius: 3px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px;
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
  cursor: pointer;
`;

export default function CardInfos() {
  const [isOpen, setOpen] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 7.5V15L20 17.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          2h
        </ShowDuration>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={50}
          a11y={true}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#FFA800"
        />
        <ShowDebut>2021</ShowDebut>
      </CardDetails>
      <CardBtnWrapper>
        <WatchBtn
          href="https://www.disneyplus.com/pt-br/series/loki/6pARMvILBGzF"
          target="_blank"
        >
          Assistir agora
        </WatchBtn>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="xdBWrkcmMwU"
            onClose={() => setOpen(false)}
          />

          <TrailerBtn className="btn-primary" onClick={() => setOpen(true)}>
            Trailer
          </TrailerBtn>
        </React.Fragment>
      </CardBtnWrapper>
    </CardContent>
  );
}
