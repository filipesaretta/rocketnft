import banner from '../../assets/banner.png';
import { About, Container, Content, Numbers } from './styles';

export function Features() {
  return (
    <Container>
      <Content>
        <About>
          <div>
            <p>
              Make it to the carpet before i vomit mmmmmm drool. Human is behind
              a closed door, emergency! abandoned! <a href="/">meeooowwww</a>{' '}
              !!! kick up litter. Lick the curtain just to be annoying. Prance
              along on top of the garden fence, annoy the neighbor's dog
            </p>
            <a href="/">Lorem ipsum</a>
          </div>
          <div>
            <p>
              I'm getting hungry and eat my own ears refuse to leave cardboard
              box. Purr for no reason fish i must find my red{' '}
              <a href="/">catnip fishy fish</a> but meow to be let out, so wake
              up wander around the house making large amounts of noise jump on
              top of your human's bed and fall asleep again stare at guinea pigs
              so fat baby cat best buddy little guy.
            </p>
            <a href="/">Lorem ipsum</a>
          </div>
        </About>
        <img src={banner} alt="" />

        <Numbers>
          <div>
            <p>10k+</p>
            <p>Artes</p>
          </div>
          <div>
            <p>200+</p>
            <p>Vendas</p>
          </div>
          <div>
            <p>20</p>
            <p>Artistas</p>
          </div>
        </Numbers>
      </Content>
    </Container>
  );
}
