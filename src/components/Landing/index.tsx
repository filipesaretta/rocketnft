import styled from 'styled-components';

import groupAvatars from '../../assets/group-avatars.png';
import badge from '../../assets/badge.svg';
import { Gallery } from '../Gallery';

const Container = styled.div``;

const MainSection = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  justify-items: center;
  column-gap: 4rem;
  padding: 0 2rem;

  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 400px 2fr max-content;
  }

  h1 {
    justify-self: center;
    font-size: 4rem;
    margin-top: 0;
    padding: 0;
    position: relative;
    grid-column: 1 / -1;
    grid-row: 1;

    @media (min-width: 768px) {
      justify-self: end;
      margin-top: 0;
      grid-column: 2;
    }

    span {
      color: var(--color-logo);
      display: block;
    }

    &::before {
      content: '';
      width: 6rem;
      height: 0.9rem;
      background-color: var(--subtitle-color);
      position: absolute;
      right: 50%;
      top: -2rem;
    }
  }
`;

const Details = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  justify-self: center;
  max-width: 460px;
  margin-top: 4rem;

  @media (min-width: 768px) {
    max-width: auto;
    justify-self: end;
    margin-top: 0;
    grid-column: 1;
    grid-row: 1;
  }

  p {
    font-size: 1.8rem;
  }

  div {
    margin-top: 3rem;
    display: flex;
    align-items: center;

    p {
      align-self: end;
      padding-left: 1rem;
      span {
        display: block;
      }
    }
  }
`;
const Badge = styled.img`
  grid-column: 1 / -1;
  margin-top: 10rem;
  @media (min-width: 1120px) {
    justify-self: end;
    margin-top: 0;
    grid-column: 3;
  }
`;

export function Landing() {
  return (
    <Container>
      <MainSection>
        <Details>
          <p>
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </p>
          <div>
            <img
              src={groupAvatars}
              alt="Avatars of artists very small pictures"
            />
            <p>
              <span>+10 </span>
              Artistas selecionados
            </p>
          </div>
        </Details>
        <h1>
          Descubra a verdadeira <br /> arte digital e <br /> colecione diversas
          <span>NFTs</span>
        </h1>
        <Badge src={badge} />
      </MainSection>
    </Container>
  );
}
