import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './PlanetsPlanet';

const fetchPlanets = async (key, greeting, page) => {
  console.log('greeting', greeting)
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}

const Planets = () => {
  const [page, setPage] = useState(1)
  const { data, status } = useQuery(['planets', 'hello', page], fetchPlanets, {
    staleTime: 2000,
    // cacheTime: 10,
    // onSuccess: () => console.log("SUCCESS fetching planets")
    // onError: () => console.log("ERROR fetching planets")
  })
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
          {data.results.map((planet) => <Planet key={planet.name} planet={planet} />)}
        </div>
      )
    }
  }

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

      {render()}
    </div>
  );
}

export default Planets;
