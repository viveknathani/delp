import * as React from 'react';
import Home from '../home/home';
import Main from '../main/main';

/**
 * Display one of the two components by maintaining a
 * state variable and letting the Home component change it.
 * @returns The correct component as per user's wish
 */
function App(): JSX.Element {
  const [stayHome, goAway] = React.useState(true);
  return (
    stayHome ? <Home goAway={() => goAway(false)}/> : <Main/>
  );
}

export default App;
