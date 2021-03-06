import React, { useState, useContext } from 'react';

import './App.css';
import { StoreContext } from './context';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';

const DICE = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  const context = useContext(StoreContext);
  const [dice, setDice] = useState([]);
  const [displayableResources, setDisplayableResources] = useState('');


  // const addPlayerHandler = (name) => {
  //   if (name.trim().length === 0) {
  //     return;
  //   }
  //   let newPlayer = { name: name, unique: `${Math.random()}${Date.now()}` };
  //   let copy = [...players, newPlayer];
  //   setPlayers(copy);
  // }

  // const deletePlayerHandler = (id) => {
  //   const newPlayers = players.filter(el => el.unique !== id);
  //   setPlayers(newPlayers);
  // }


  // const addPersonToDiceInventory = (person, die) => {
  //   const per = { ...person, resources: { wheat: 0, brick: 0, wool: 0, wood: 0, ore: 0 }, robber: false, uniqueRowId: `${Math.random()}${Date.now()}` };

  //   let dieCopy = dice.map(cur => {
  //     if (cur.die === die) {
  //       cur.inventory = [...cur.inventory, per];
  //     }
  //     return cur;
  //   });

  //   setDice(dieCopy);
  // }

  // const deletePersonFromDiceInventory = (uri, die) => {
  //   let dieCopy = dice.map(cur => {
  //     if (cur.die === die) {
  //       cur.inventory = cur.inventory.filter(el => el.uniqueRowId !== uri);
  //     }
  //     return cur;
  //   });
  //   setDice(dieCopy);
  // }

  // const toggleRobberHandler = (uri, die) => {
  //   let dieCopy = [...dice].map(cur => {
  //     if (cur.die === die) {
  //       cur.inventory = cur.inventory.map(el => {
  //         if (el.uniqueRowId === uri) {
  //           el.robber = !el.robber;
  //         }
  //         return el;
  //       });
  //     }
  //     return cur;
  //   });
  //   setDice(dieCopy);
  // }

  // const addResourceHandler = (uri, die, resource) => {
  //   let dieCopy = [...dice].map(cur => {
  //     if (cur.die === die) {
  //       cur.inventory = cur.inventory.map(el => {
  //         if (el.uniqueRowId === uri) {
  //           el.resources[resource]++;
  //         }
  //         return el;
  //       });
  //     }
  //     return cur;
  //   });
  //   setDice(dieCopy);
  // }

  // const removeResourceHandler = (uri, die, resource) => {
  //   let dieCopy = [...dice].map(cur => {
  //     if (cur.die === die) {
  //       cur.inventory = cur.inventory.map(el => {
  //         if (el.uniqueRowId === uri && el.resources[resource] > 0) {
  //           el.resources[resource]--;
  //         }
  //         return el;
  //       });
  //     }
  //     return cur;
  //   });
  //   setDice(dieCopy);
  // }

  // const consolidateResources = (arr) => {
  //   let compiledResourceList = { name: arr[0].name, unique: arr[0].unique + arr[0].uniqueRowId, resources: { wheat: 0, brick: 0, wool: 0, wood: 0, ore: 0 } };

  //   arr.forEach((cur) => {
  //     compiledResourceList.resources.wheat += cur.resources.wheat;
  //     compiledResourceList.resources.brick += cur.resources.brick;
  //     compiledResourceList.resources.wool += cur.resources.wool;
  //     compiledResourceList.resources.wood += cur.resources.wood;
  //     compiledResourceList.resources.ore += cur.resources.ore;
  //   });
  //   if (!compiledResourceList.resources.wheat && !compiledResourceList.resources.brick && !compiledResourceList.resources.wool && !compiledResourceList.resources.wood && !compiledResourceList.resources.ore) return;
  //   return compiledResourceList;
  // }


  // const showResourcesHandler = (die) => {
  //   let dieCopy = dice.filter(el => el.die === die);
  //   let temp;
  //   let returnArr = [];

  //   players.forEach(el => {
  //     let allResourcesForPlayer = dieCopy[0].inventory.filter(person => person.unique === el.unique && !person.robber);


  //     if (allResourcesForPlayer[0]) {
  //       temp = consolidateResources(allResourcesForPlayer);
  //       if (temp) returnArr.push(consolidateResources(allResourcesForPlayer));
  //     }
  //   });

  //   if (returnArr.length === 0) return;

  //   setDisplayableResources(returnArr);
  // }

  // const hideResourcesHandler = () => {
  //   setDisplayableResources('');
  // }

  return (

    <div className="App">
      {context.page === 1 && <PageOne />}
      {context.page === 2 && <PageTwo />}
    </div>
  );
}

export default App;
