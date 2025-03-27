import { Link } from "react-router-dom";

import styled from "styled-components";
import heroPng from "../assets/home-banner.png";

export const AnasayfaDiv = styled.div`
  background-image: url(${heroPng});
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  background-size: cover;
  line-height: 2rem;
`;
export const Baslik = styled.h1`
  margin-top: 3rem;
  color: white;
  font-family: "Londrina Solid", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
export const Slogan = styled.p`
  font-size: 5rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  letter-spacing: 0.2rem;
  font-style: normal;
  color: white;
`;
export const Button = styled.button`
  border-radius: 2rem;
  border: 1px solid transparent;
  padding: 1em 4em;
  font-size: 1em;
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: #fdc913;
  cursor: pointer;
  transition: border-color 0.25s;
`;

export default function Anasayfa() {
  return (
    <>
      <AnasayfaDiv>
        <Baslik>Teknolojik Yemekler</Baslik>
        <Slogan>KOD ACIKTIRIR</Slogan>
        <Slogan>PİZZA, DOYURUR</Slogan>
        <Link to={"./siparis"}>
          <Button>ACIKTIM</Button>
        </Link>
        <Link to={"./sonuc"}>
          <Button>SONUC</Button>
        </Link>
      </AnasayfaDiv>
    </>
  );
}
