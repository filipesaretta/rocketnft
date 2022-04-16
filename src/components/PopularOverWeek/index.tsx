import styled from 'styled-components';

import person1 from '../../assets/astronauta 1.png';
import person2 from '../../assets/astronauta-2.png';
import person3 from '../../assets/astronauta-3.png';
import person4 from '../../assets/astronauta-4.png';
import arrow from '../../assets/arrow-white.svg';

const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 5rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, max-content);
  }

  h3 {
    grid-column: 1 / -1;
    font-size: 4rem;
    padding: 10rem 0;
    span {
      color: var(--color-logo);
    }
  }
`;
const Astronaut = styled.a`
  p {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 1rem;
    color: var(--subtitle-color);
    font-size: 2rem;
    span {
      color: var(--color-logo);
    }
  }

  p:first-child {
    color: white;
    font-size: 3rem;
  }
`;

export function PopularOverWeek() {
  return (
    <Container>
      <h3>
        <span>Populares</span> da Semana
      </h3>
      <Astronaut>
        <p>
          Astronauta 1 <img src={arrow} alt="" />
        </p>
        <p>
          Jonh Doe <span> 1.50RKT</span>
        </p>
        <img src={person1} alt="" />
      </Astronaut>
      <Astronaut>
        <p>
          Astronauta 2 <img src={arrow} alt="" />
        </p>
        <p>
          Jane Doe <span> 4.50RKT</span>
        </p>
        <img src={person2} alt="" />
      </Astronaut>
      <Astronaut>
        <p>
          Astronauta 3 <img src={arrow} alt="" />
        </p>
        <p>
          Maria Luigia <span> 7.50RKT</span>
        </p>
        <img src={person3} alt="" />
      </Astronaut>
      <Astronaut>
        <p>
          Astronauta 4 <img src={arrow} alt="" />
        </p>
        <p>
          Giuseppe Rossi <span> 5.50RKT</span>
        </p>
        <img src={person4} alt="" />
      </Astronaut>
    </Container>
  );
}
