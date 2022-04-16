import { BestArtists } from './components/BestArtists';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { MainLanding } from './components/MainLanding';
import { PopularOverWeek } from './components/PopularOverWeek';

function App() {
  return (
    <>
      <MainLanding />
      <Features />
      <PopularOverWeek />
      <BestArtists />
      <Footer />
    </>
  );
}

export default App;
