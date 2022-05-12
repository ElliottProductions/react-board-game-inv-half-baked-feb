import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const [{
    title, 
    designer, 
    genre,
    min_players, 
    max_players,
    description
  }, setGame] = useState({});
  const match = useRouteMatch();

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function fetch() {
      const gameResponse = await getGameById(match.params.id);

      setGame(gameResponse);
    }

    fetch();
  }, [match]);

  return (
    <div className='detail'>
      <h1>{title}</h1>
      <h2>A {genre} game for {min_players} to {max_players} players</h2>
      <h3>by celebrated designer {designer}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}
