import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Product from './Product';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f1edee',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
    alignItems: 'center',
    '& a:link, & a:visited': {
      color: 'blue',
      textDecoration: 'none'
    }
  },
  container: {
    backgroundColor: '#8AA29E',
    maxWidth: '1080px',
    width: '100%',
    padding: '0px 16px'
  }
});

const products = [
  {
    name: 'pHi-Zymes',
    website:
      'https://baselinenutritionals.net/collections/frontpage/products/phi-zymes%C2%AE-450-capsules',
    youtube: 'https://www.youtube.com/watch?v=dgJGmCmh9uI&feature=youtu.be',
    benefits: [
      "World's most powerful systemic proteolytic enzyme formula to help facilitate injury recovery.",
      'Helps your body clean out and repair the cardiovascular system for health or athletic performance.',
      'Reduces Circulating Immune Complexes that can lead to allergies and systemic inflammation.',
      'Nutritionally enhances the quality of blood.',
      'Helps with factors that can cause autoimmune disorders.',
      'Helps clean out and repair the cardiovascular system',
      'Helps minimize the risk of blood clots',
      'Helps reduce scar tissue',
      'Digest fibroid cysts',
      'Proteolytic enzymes have been used since early 1900s as natural protocal to heal cancer',
      'Mode of action breaks down fibrin coatings of cancer cells',
      'Potentially allows lower does of chemotherapy thereby reducing side-effects incurred',
      'Decreases inflammation'
    ],
    references: [
      'https://thetruthaboutcancer.com/systemic-proteolytic-enzymes/',
      'https://articles.mercola.com/sites/articles/archive/2018/03/05/proteolytic-enzymes-benefits.aspx'
    ]
  }
];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <main className={classes.content}>
          <h1>Alternative Medicine</h1>
          <h2>Proposed Treatment</h2>
          <p>
            Morning on an empty stomach (at least 45 mins away from food), Take
            5g orally (10 capsules, 3.33 servings) of proteolytic enzymes.
          </p>
          <p>
            Before bed on an empty stomach (at least 45 mins away from food).
            Take 5g orally (10 capsules, 3.33 servings) of proteolytic enzymes.
          </p>

          {products.map((p, i) => (
            <Product data={p} num={i} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
