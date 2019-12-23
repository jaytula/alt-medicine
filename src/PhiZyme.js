import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {}
});

function Product({ data, num }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{data.name}</h2>
      <p>
        Product website is: <a href={data.website}>{data.website}</a>
      </p>
      <p>
        Youtube video on benefits of systemic enzymes:{' '}
        <a href={data.youtube}>Video</a>
      </p>
      <h4>Proteolytic Enzyme Benefits</h4>
      {data.benefits.map((b, i) => (
        <p key={i}>
          {i + 1}. {b}
        </p>
      ))}

      <h4>References</h4>
      {data.references.map((r, i) => (
        <p key={i} num={i}>
          <a href={r}>{r}</a>
        </p>
      ))}
    </div>
  );
}

export default Product;
