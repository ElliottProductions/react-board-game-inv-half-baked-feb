import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  // you'll need some state to hold onto the array of games
  const [games, setGames] = useState([]);
  // fetch the games on load and inject them into state
  useEffect(() => {
    async function fetch() {
      const fetchedGames = await getGames();

      setGames(fetchedGames);
  


    }

    fetch();
  }, []);
 



  return (
    <div className='list games'>
      <p>yooooo</p>
      {games.map(game => <Game key={game.id} game={game}/>)}
    </div>
  );
}
