import styled from 'styled-components';
import { Gallery } from '../Gallery';
import { Header } from '../Header';
import { Landing } from '../Landing';
import imagePath from '../../assets/background.png';

const Container = styled.div`
  background: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export function Layout() {
  return (
    <Container style={{ backgroundImage: `url(${imagePath})` }}>
      <Header />
      <Landing />
      <Gallery />
    </Container>
  );
}
