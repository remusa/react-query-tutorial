import PropTypes from "prop-types";
import React from 'react';

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Gender - { person.gender }</p>
      <p>Birth year - { person.birth_year }</p>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string
  })
}

export default Person;
