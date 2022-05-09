import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <section className="missions">
        <Title headline="Missões" />
        <div data-testid="missions" className="mission-card-list">
          {missions.map((misson) => {
            const { name: n, year: y, country: c, destination: d } = misson;
            return (
              <MissionCard
                key={ n }
                name={ n }
                year={ y }
                country={ c }
                destination={ d }
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Missions;
