import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://picfiles.alphacoders.com/118/118082.jpg" />
      </Background>
      <ImgTitle>
        <img src="/images/viewers-disney.png" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupButton>
      </Controls>
      <SubTitle>
        asdasdsadsadadasdasdasdasasdasdsadsad
      </SubTitle>
      <Description>
          sadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsasadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsasadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsasadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsa
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 40vh;
  min-height: 170px;
  width: 40vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 15px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupButton = styled(AddButton)`
    background: rgb(0,0,0);
`;


const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    max-width: calc(100vw - 60%);
    word-break:break-all;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249)
`