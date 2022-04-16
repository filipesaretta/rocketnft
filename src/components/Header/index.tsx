import styled from 'styled-components';

import metamaskLogo from '../../assets/logo_MetaMask.svg';

const Menu = styled.header`
  display: grid;
  align-items: center;
  justify-content: space-between;
  max-width: 1270px;
  margin: 0 auto;
  padding: 3rem 2rem 8rem 2rem;
  grid-template-columns: auto auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }

  ul {
    display: flex;
    grid-column: 1/-1;
    grid-row: 2;
    padding: 0;
    margin-top: 1rem;

    @media (min-width: 568px) {
      margin-top: 0;
      grid-row: 1;
      grid-column: 2;
    }

    li {
      list-style: none;
      &:not(:last-child) {
        margin-right: 4rem;
      }
      a {
        text-decoration: none;
        color: var(--white);
      }
    }
  }
`;

const Logo = styled.h1`
  grid-column: 1/ -1;
  font-size: 3rem;
  justify-self: center;

  @media (min-width: 568px) {
    font-size: 4rem;
    grid-column: 1;
    font-size: 3rem;
    justify-self: center;
  }
  span {
    color: var(--color-logo);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 5rem;
  border-radius: 0.3rem;
  border: none;
  padding: 1rem 1.4rem;
  color: var(--black-text);
  font-weight: 700;

  img {
    margin-right: 1rem;
  }
  grid-column: 1/ -1;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
    grid-column: 3;
  }
`;

export function Header() {
  return (
    <Menu>
      <Logo>
        Rocket <span>NFT</span>
      </Logo>
      <ul id="top">
        <li>
          <a href="/"> Comprar NFT</a>
        </li>
        <li>
          <a href="/"> Sobre</a>
        </li>
        <li>
          <a href="/"> FAQ</a>
        </li>
      </ul>
      <Button>
        <img src={metamaskLogo} alt="" /> Conectar Carteira
      </Button>
    </Menu>
  );
}
