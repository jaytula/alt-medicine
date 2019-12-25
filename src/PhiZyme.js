import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {}
});

const phizyme = {
  name: 'pHi-Zymes (proteolytic enzyme supplement)',
  website:
    'https://baselinenutritionals.net/collections/frontpage/products/phi-zymes%C2%AE-450-capsules',
  youtube: 'https://www.youtube.com/watch?v=dgJGmCmh9uI&feature=youtu.be',
  benefits: [
    'Have been used since early 1900s as natural protocol to heal cancer',
    'Mode of action breaks down fibrin coatings of cancer cells',
    'May allow lower doses of chemotherapy thereby reducing side-effects incurred',
    'Reduces Circulating Immune Complexes that can lead to allergies and systemic inflammation.',
    'Nutritionally enhances the quality of blood.',
    'Helps with factors that can cause autoimmune disorders.',
    'Helps clean out and repair the cardiovascular system',
    'Helps minimize the risk of blood clots',
    'Helps reduce scar tissue',
    'Digest fibroid cysts'
  ],
  references: [
    'https://thetruthaboutcancer.com/systemic-proteolytic-enzymes/',
    'https://articles.mercola.com/sites/articles/archive/2018/03/05/proteolytic-enzymes-benefits.aspx',
    'https://draxe.com/nutrition/proteolytic-enzymes/',
    'https://www.jonbarron.org/article/proteolytic-enzyme-formula',
    'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4188883/',
    'https://www.youtube.com/watch?v=33-fWuor0eo'
  ]
};

function Product({ num }) {
  const classes = useStyles();
  const data = phizyme;

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
      <ol>
        {data.references.map((r, i) => (
          <li id={`ref-${i + 1}`} key={i} num={i}>
            <a href={r}>{r}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Product;
