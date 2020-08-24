import React from 'react';
import './App.css';
import Game from './components/game/Game';

function App(props) {
    const troopers = {
      name: 'Death Star Troopers',
      logoSrc: 'https://i.pinimg.com/236x/94/7e/b5/947eb5c94e42fa10b02b56cbb4505d24--star-troopers-golden-state-warriors.jpg'
    }

    const force = {
      name: 'Dagobah Swamp Force',
      logoSrc: 'https://i.pinimg.com/236x/68/ab/fc/68abfcb7439fb7dad6af60ab6b802f3b--star-wars-logos-star-wars-art.jpg'
    }

    const emperors = {
      name: 'Darkside Emperors',
      logoSrc: 'https://i.pinimg.com/236x/ff/07/69/ff0769980fcfce821366aca69fd22e8a--sport-logos-logo-ideas.jpg'
    }

    const rebels = {
      name: 'Republic Rebels',
      logoSrc: 'https://i.pinimg.com/236x/5c/2b/00/5c2b006f9c2677c7f5727d7424c8f95a--sports-logos-star-wars-rebels.jpg'
    }

    return (
      <div className='App'>
        <Game
          venue='Gauntlets Fighter'
          homeTeam={troopers}
          visitingTeam={force}
        />
        <Game
          venue='Naboos Royal Starship'
          homeTeam={emperors}
          visitingTeam={rebels}
        />

      </div>
    )
  }

export default App;