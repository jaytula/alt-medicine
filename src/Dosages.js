import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  dosageRoot: { display: 'grid', gridTemplateColumns: '1fr 1fr 2fr' }
});
const dosages = [
  {
    name: 'Cancer Prevention',
    schedule: [
      { time: '6:00am', timeDescription: 'morning', numCapsules: 10 },
      { time: '8:00pm', timeDescription: 'before bedtime', numCapsules: 10 }
    ]
  },
  {
    name: 'Cancer Patient',
    schedule: [
      { time: '6:00am', timeDescription: 'morning', numCapsules: 30 },
      { time: '9:00am', timeDescription: 'late morning', numCapsules: 20 },
      { time: '8:00pm', timeDescription: 'before bedtime', numCapsules: 30 }
    ]
  }
];

function Dosages() {
  const classes = useStyles();
  return (
    <div>
      <p>
        Take on an empty stomatch at least 45 minutes or more away from food.
      </p>
      {dosages.map(dosage => (
        <div className={classes.root}>
          <h3>{dosage.name} Dosage</h3>
          {dosage.schedule.map(t => (
            <div className={classes.dosageRoot}>
              <div>{t.time}</div>
              <div>{t.timeDescription}</div>
              <div>
                {t.numCapsules} capsules ({t.numCapsules * 0.5}g)
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dosages;
