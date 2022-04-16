import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #252525;
  margin-top: 5rem;
`;

export const WrapFooter = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1 / -1;
  padding: 8rem 0;

  h4 {
    font-size: 2.5rem;
    span {
      color: var(--color-logo);
    }
  }
  a {
    background-color: var(--color-logo);
    padding: 2rem;
  }
`;

export const Newsletter = styled.div`
  padding: 2rem 0;
  h4 {
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 2rem;
    span {
      color: var(--color-logo);
    }
  }
  input {
    border: none;
    background-color: var(--color-input);
    padding: 0.8rem;
    color: white;
  }
  button {
    border: none;
    background-color: white;
    padding: 0.8rem;
    font-weight: 700;
    border-radius: 0.2rem;
  }

  justify-self: center;
  text-align: center;
  @media (min-width: 768px) {
    justify-self: start;
    text-align: left;
  }
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;
  justify-self: center;
  text-align: center;

  @media (min-width: 768px) {
    justify-self: end;
    text-align: left;
  }

  ul {
    li {
      list-style: none;
      margin-bottom: 1rem;
      color: var(--subtitle-color);
    }

    li:first-child {
      color: white;
      font-weight: 700;
    }
  }
`;

export const Social = styled.div`
  color: var(--subtitle-color);
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  padding: 8rem 0;
  flex-wrap: wrap;

  @media (min-width: 408px) {
    justify-content: space-between;
  }

  div {
    display: flex;

    a {
      margin: 0 1rem;
      display: grid;
    }
  }
  a {
    text-decoration: none;
    color: var(--subtitle-color);
  }
`;
