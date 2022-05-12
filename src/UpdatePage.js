import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame({
      title,
      genre,
      designer,
      description,
      min_players: minPlayers,
      max_players: maxPlayers
    });
    // use history.push to send the user to the list page
    history.push('/board-games');
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required onChange={e => setTitle(e.target.value)} name='title' />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required onChange={e => setGenre(e.target.value)}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required onChange={e => setDesigner(e.target.value)} name='designer' />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required onChange={e => setMinPlayers(e.target.value)} name='min_players' />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required onChange={e => setMaxPlayers(e.target.value)} name='max_players' />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required onChange={e => setDescription(e.target.value)} name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
