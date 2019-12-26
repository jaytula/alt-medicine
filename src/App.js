import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PhiZyme from './PhiZyme';
import Dosages from './Dosages';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
    alignItems: 'center',
    '& a:link, & a:visited': {
      color: 'blue',
      textDecoration: 'none'
    },
    '& a': {
      wordBreak: 'break-all'
    }
  },
  container: {
    backgroundColor: '#f1edee',
    maxWidth: '1080px',
    width: '100%',
    padding: '0px 8px',
    margin: '0px 8px'
  },
  content: {
    padding: '0 12px'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <main className={classes.content}>
          <h1>Enzyme Therapy Information</h1>
          <p>
            The following instructions daily dose information per{' '}
            <a href="#ref-1">Reference 1</a>:
          </p>
          <h2>Dosage Info</h2>
          <Dosages />
          <h2>Risks</h2>
          <p>
            Die-off of cancer cells too fast can overwhelm body's ability to
            eliminate them thereby resulting in a worsening of symptoms
            (Herxheimer Reaction). Coffee enemas have been suggested as the most
            effective way to detox out dead cancer cells and toxins.
          </p>
          <PhiZyme />
        </main>
      </div>
    </div>
  );
}

export default App;
