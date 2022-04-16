import { BestArtists } from './components/BestArtists';
import { Features } from './components/Features';
import { MainLanding } from './components/MainLanding';
import { PopularOverWeek } from './components/PopularOverWeek';

function App() {
  return (
    <>
      <MainLanding />
      <Features />
      <PopularOverWeek />
      <BestArtists />
    </>
  );
}

export default App;
