import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PhiZyme from './PhiZyme';

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
          <h2>Cancer Prevention Dosage</h2>

          <p>
            Morning on an empty stomach (at least 45 mins away from food), Take
            5g orally (10 capsules) of proteolytic enzymes.
          </p>
          <p>
            Before bedtime on an empty stomach (at least 45 mins away from
            food). Take 5g orally (10 capsules) of proteolytic enzymes.
          </p>

          <h2>Cancer Patients Dosage</h2>

          <p>
            Morning on an empty stomach (at least 45 mins away from food), Take
            15g orally (30 capsules) of proteolytic enzymes.
          </p>
          <p>Three hours later 10g orally (20 capsules).</p>
          <p>
            Before bedtime on an empty stomach (at least 45 mins away from
            food), take 15g orally (30 capsules).
          </p>

          <PhiZyme />
        </main>
      </div>
    </div>
  );
}

export default App;
