import {
  Container,
  WrapFooter,
  FirstSection,
  Newsletter,
  Nav,
  Social,
} from './styles';
import arrow from '../../assets/arrow-black.svg';
import insta from '../../assets/instagram.svg';
import yt from '../../assets/youtube.svg';
import twitter from '../../assets/twitter.svg';
import email from '../../assets/email.svg';

export function Footer() {
  return (
    <Container>
      <WrapFooter>
        <FirstSection>
          <h4>
            Rocket <span>NFTs</span>
          </h4>
          <a href="#top">
            <img src={arrow} alt="" />
          </a>
        </FirstSection>
        <Newsletter>
          <h4>
            Fique por dentro de <br /> <span>todas as novidades</span>
          </h4>
          <input type="email" placeholder="nft@rocketnft.com" />
          <button type="submit">Enviar</button>
        </Newsletter>
        <Nav>
          <ul>
            <li>Empresa</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Time</li>
            <li>Carreira</li>
          </ul>
          <ul>
            <li>Mapa</li>
            <li>Galeria</li>
            <li>Populares</li>
            <li>Vendas</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Links</li>
            <li>FAQs</li>
            <li>Termos</li>
            <li>Política</li>
            <li>Ajuda</li>
          </ul>
        </Nav>
        <Social>
          <a href="www.rocketseat.com.br">www.rocketseat.com.br</a>
          <div>
            <a href="/">
              <img src={yt} alt="Youtube Logo" />
            </a>
            <a href="/">
              <img src={insta} alt="Instagram Logo" />
            </a>
            <a href="/">
              <img src={twitter} alt="Twitter Logo" />
            </a>
            <a href="/">
              <img src={email} alt="Envelope" />
            </a>
          </div>
        </Social>
      </WrapFooter>
    </Container>
  );
}
