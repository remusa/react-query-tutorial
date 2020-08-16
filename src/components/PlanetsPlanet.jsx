import PropTypes from "prop-types";
import React from 'react';

const Planet = ({ planet }) => {
	return (
    <div className="card">
      <h3>{ planet.name }</h3>
      <p>Population - { planet.population }</p>
      <p>Terrain - { planet.terrain }</p>
    </div>
	)
}

Planet.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string
  })
}


export default Planet
