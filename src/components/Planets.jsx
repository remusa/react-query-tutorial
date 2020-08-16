import React from 'react';
import { useQuery } from 'react-query';
import Planet from './PlanetsPlanet';

const fetchPlanets = async () => {
  const res = await fetch(`https://swapi.dev/api/planets/`)
  return res.json()
}

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets, {
    staleTime: 2000,
    // cacheTime: 10,
    // onSuccess: () => console.log("SUCCESS fetching planets")
    // onError: () => console.log("ERROR fetching planets")
  })

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
          {data.results.map((planet) => <Planet key={planet.name} planet={planet} />)}
        </div>
      )
    }
  }

  return (
    <div>
      <h2>Planets</h2>
      {render()}
    </div>
  );
}

export default Planets;
