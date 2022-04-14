import styled from 'styled-components';
import gallery1 from '../../assets/galeria-1.png';
import gallery2 from '../../assets/galeria-2.png';
import gallery3 from '../../assets/galeria-3.png';
import gallery4 from '../../assets/galeria-4.png';
import gallery5 from '../../assets/galeria-5.png';
import gallery6 from '../../assets/galeria-6.png';
import gallery7 from '../../assets/galeria-7.png';
import gallery8 from '../../assets/galeria-8.png';

const Container = styled.div`
  max-width: 1270px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 4rem;
  column-gap: 2rem;
  padding: 8rem 2rem 2rem 2rem;
  justify-items: center;

  img {
    border: solid 1px white;
  }
`;

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

export function Gallery() {
  return (
    <Container>
      {images.map((image) => (
        <img src={image} alt="An astronaut in the dark" key={image} />
      ))}
    </Container>
  );
}
