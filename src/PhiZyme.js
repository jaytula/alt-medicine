import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& li': {
      padding: '4px 0'
    }
  },
  reference: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '8px',
    margin: '8px'
  },
  gridHeader: {
    fontWeight: 'bold'
  }
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
    {
      title: 'How Systemic Proteolytic Enzymes Fight Cancer - Dr Jockers',
      link: 'https://thetruthaboutcancer.com/systemic-proteolytic-enzymes/'
    },
    {
      title: 'The Many Health Benefits of Proteolytic Enzymes - Dr Mercola',
      link:
        'https://articles.mercola.com/sites/articles/archive/2018/03/05/proteolytic-enzymes-benefits.aspx'
    },
    {
      title:
        'Proteolytic Enzymes Reduce Inflammation and Boost Immunity - Jillian Levy, CHHC',
      link: 'https://draxe.com/nutrition/proteolytic-enzymes/'
    },
    {
      title: 'The Best Proteolytic Enzymes Formula - Jon Barron',
      link: 'https://www.jonbarron.org/article/proteolytic-enzyme-formula'
    },
    {
      title:
        'Impact of proteolytic enzymes in colorectal cancer development and progression',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4188883/'
    },
    {
      title:
        'Using Enzymes as a Cancer Treatment - Dr Nicolas Gonzalez [YouTube]',
      link: 'https://www.youtube.com/watch?v=33-fWuor0eo'
    },
    {
      title:
        "Enzyme Therapy For Cancer, Beard's Discovery Trophoblast/Cancer cells similarity [YouTube]",
      link: 'https://www.youtube.com/watch?v=XIzmlv1hMLw'
    },
    {
      title:
        "Systemic Proteolytic Enzymes--What works, What Doesn't and Why - Jon Barron [YouTube]",
      link: 'https://www.youtube.com/watch?v=dgJGmCmh9uI'
    },
    {
      title: 'pHi-Zymes® 450 Capsules Product Page',
      link:
        'https://baselinenutritionals.net/collections/frontpage/products/phi-zymes%C2%AE-450-capsules'
    }
  ]
};

function Product({ num }) {
  const classes = useStyles();
  const data = phizyme;

  return (
    <div className={classes.root}>
      <h2>{data.name}</h2>
      <p>
        The rationale for using proteolytic enzymes to treat cancer is these
        enzymes break down the fibrin (protective wall) of cancer cells thereby
        allowing the immune system to recognize a better eliminate the
        malfunctioning cancer cell.
      </p>
      <h4>Proteolytic Enzyme Benefits</h4>
      <ol>
        {data.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ol>

      <h4>References</h4>
      <div className={`${classes.gridHeader} ${classes.reference}`}>
        <div>Title</div>
        <div>Link</div>
      </div>
      {data.references.map((r, i) => (
        <div id={`ref-${i + 1}`} key={i} num={i} className={classes.reference}>
          <div>{r.title}</div>
          <div>
            <a href={r.link}>{r.link}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
