import React, { useState, useEffect } from 'react';
import './App.css';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';

const DICE = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  const [players, setPlayers] = useState([{ name: 'Joshua', unique: 'sdfasgas309u434' }, { name: 'Jane', unique: 'sdfasgassdfjkds309u434' }]);
  const [page, setPage] = useState(2);
  const [dice, setDice] = useState([]);
  const [displayableResources, setDisplayableResources] = useState([]);

  useEffect(() => {
    const dice = DICE.map(el => {
      return { die: el, inventory: [] };
    });
    setDice(dice);
  }, []);

  const addPlayerHandler = (name) => {
    if (name.trim().length === 0) {
      return;
    }
    let newPlayer = { name: name, unique: `${Math.random()}${Date.now()}` };
    let copy = [...players, newPlayer];
    setPlayers(copy);
  }

  const deletePlayerHandler = (id) => {
    const newPlayers = players.filter(el => el.unique !== id);
    setPlayers(newPlayers);
  }

  const changePageHandler = (page) => {
    setPage(page);
  }

  const showResourcesHandler = (die) => {

  }

  return (
    <div className="App">
      {page === 1 && <PageOne players={players} addPlayerHandler={addPlayerHandler} deletePlayerHandler={deletePlayerHandler} changePageHandler={changePageHandler} />}

      {page === 2 && <PageTwo changePageHandler={changePageHandler} dice={dice} players={players} />}
    </div>
  );
}

export default App;
