import styled from 'styled-components';

import metamaskLogo from '../../assets/logo_MetaMask.svg';

const Menu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1270px;
  margin: 5rem auto 9rem auto ;
  padding: 0 2rem;

  ul {
    display: flex;

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
`;

export function Header() {
  return (
    <Menu>
      <Logo>
        Rocket <span>NFT</span>
      </Logo>
      <ul>
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
