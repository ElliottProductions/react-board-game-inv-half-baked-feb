import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}

// signs an new user in and puts an auth token in local storage in the browser
export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

// removes the token from local storage and redirects the user home
export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function createGame(game){
  const response = await client
    .from('board_games')
    .insert([game]);

  return checkError(response);
}


export async function getGames() {
  const response = await client
    .from('board_games')
    .select();


  return checkError(response);    
}



export async function getGameById(id) {
  const response = await client
    .from('board_games')
    .select()
    .match({ id })
    .single();

  return checkError(response);    
}

export async function updateGame({ gameID, title, genre, designer, description, min_players, max_players }) {
  const response = await client
    .from('board_games')
    .update({ title: title,
      genre: genre,
      designer: designer,
      description: description,
      min_players: min_players,
      max_players: max_players })
    .match({ id: gameID });


  return checkError(response);    
}
