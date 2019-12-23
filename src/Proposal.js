import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: { padding: '4px' }
});

function Proposal({ data, num }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <b>{num}.</b> {data.en}
    </div>
  );
}

export default Proposal;
