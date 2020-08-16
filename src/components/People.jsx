import React from 'react';
import { useQuery } from 'react-query';
import Person from './PeoplePerson';

const fetchPeople = async () => {
  const res = await fetch(`https://swapi.dev/api/people/`)
  return res.json()
}

const People = () => {
  const { data, status } = useQuery('people', fetchPeople)
  console.log('data', data)

  const render = () => {
    if (status === "loading") {
      return <div>Loading...</div>
    }
    else if (status === "error") {
      return <div>Error fetching data</div>
    }
    else if (status === "success") {
      return (
        <div>
          {data.results.map((person) => <Person key={person.name} person={person} />)}
        </div>
      )
    }
  }

  return (
    <div>
      <h2>People</h2>

      {render()}
    </div>
  );
}

export default People;
