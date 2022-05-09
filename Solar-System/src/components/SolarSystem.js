import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="planets">
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="card-list">
          {planets.map((planet) => {
            const { name, image } = planet;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
