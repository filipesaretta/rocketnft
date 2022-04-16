import styled from 'styled-components';

import artist1 from '../../assets/artista-1.png';
import artist2 from '../../assets/artista-2.png';
import artist3 from '../../assets/artista-3.png';
import artist4 from '../../assets/artista-4.png';
import artist5 from '../../assets/artista-5.png';
import artist6 from '../../assets/artista-6.png';
import arrow from '../../assets/arrow-orange.svg';

const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  row-gap: 8rem;
  justify-items: center;

  h3 {
    text-align: center;
    font-size: 4rem;
    margin: 4rem 0;
    grid-column: 1/-1;
    span {
      color: var(--color-logo);
    }
  }
  a {
    grid-column: 1 / -1;
    display: flex;
    text-decoration: none;
    color: white;

    img {
      margin-left: 2rem;
    }
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'avatar name'
    'avatar desc';
  background-color: var(--card-color);
  width: 350px;
  padding: 2rem;
  align-items: center;

  img {
    grid-area: avatar;
  }

  p {
    grid-area: name;
    align-self: end;
  }

  p:last-child {
    grid-area: desc;
    align-self: center;
    color: var(--color-logo);
  }
`;

const artists = [
  {
    name: 'Giuseppe',
    work: '80 Fotografias',
    avatar: artist1,
  },
  {
    name: 'Maria Luigia',
    work: '30 Fotografias',
    avatar: artist2,
  },
  {
    name: 'Pamela',
    work: '25 Fotografias',
    avatar: artist3,
  },
  {
    name: 'Jonh',
    work: '70 Fotografias',
    avatar: artist4,
  },
  {
    name: 'Joane',
    work: '40 Fotografias',
    avatar: artist5,
  },
  {
    name: 'Luigi',
    work: '100 Fotografias',
    avatar: artist6,
  },
];

export function BestArtists() {
  return (
    <Container>
      <h3>
        Melhores <span>artistas </span>
      </h3>
      {artists.map((artist) => (
        <Card key={artist.name}>
          <img src={artist.avatar} alt="" />
          <p> {artist.name}</p>
          <p>{artist.work}</p>
        </Card>
      ))}
      <a href="/">
        Veja todos os artistas <img src={arrow} alt="" />
      </a>
    </Container>
  );
}
