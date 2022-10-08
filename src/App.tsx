import React from 'react';

import Header from './componets/header/header';
import Lebel from './componets/lablel/leblel';
import Colection from './componets/colection/colection';
import RunningLineArtists from './componets/running_line/runningLineArtists/runningLineArtists';
import RunningLineTeams from './componets/running_line/runningLineTeam/runningLineTeam';
import RunningLineLogoholder from './componets/running_line/logoholder/runningLineLogoholder';
import Artists from './componets/artists/artists';
import Story from './componets/story/story';
import Roadmap from './componets/roadmap/story';
import FAQ from './componets/FAQ/faq';
import Team from './componets/team/team';
import Discord  from './componets/Discord/discord';
import Footer from './componets/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Lebel />
      <Colection />
      <RunningLineArtists />
      <Artists />
      <Story />
      <Roadmap />
      <RunningLineLogoholder />
      <FAQ/>
      <RunningLineTeams />
      <Team />
      <Discord />
      <Footer />
    </div>
  );
}

export default App;
