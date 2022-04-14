import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-items: center;
  @media (min-width: 568px) {
    grid-template-columns: auto 1fr;
  }

  img {
    align-self: start;
    @media (min-width: 768px) {
      align-self: end;
    }
  }
`;

export const About = styled.div`
  display: flex;
  grid-row: 2;
  margin-bottom: 4rem;
  @media (min-width: 568px) {
    grid-row: 1;
  }

  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  a {
    color: white;
  }

  div {
    padding: 4rem 3rem 0 3rem;

    @media (min-width: 960px) {
      padding: 4rem 7rem 0 7rem;
    }

    p {
      margin-bottom: 4rem;
      a {
        color: var(--color-logo);
      }
    }
  }
`;

export const Numbers = styled.div`
  grid-column: 1;
  grid-row: 1;
  border-right: none;
  text-align: center;
  display: block;
  padding-right: 4rem;
  margin-left: 2rem;

  @media (min-width: 568px) {
    border-right: 2px solid var(--subtitle-color);
    grid-column: 1;
    grid-row: 1 / -1;
    flex-direction: column;
    display: flex;
    justify-content: start;
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  div {
    padding-top: 4rem;
    padding-bottom: 5rem;
    @media (min-width: 768px) {
      padding-top: 0;
      padding-bottom: 0;
    }
    p:first-child {
      font-size: 5rem;
      font-weight: 700;
    }

    p:nth-child(2) {
      color: var(--subtitle-color);
    }
  }
`;
