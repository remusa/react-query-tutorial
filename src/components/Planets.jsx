import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './PlanetsPlanet';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}

const Planets = () => {
  const [page, setPage] = useState(1)
  const { resolvedData, latestData, status } = usePaginatedQuery(['planets', page], fetchPlanets, {
    // staleTime: 2000,
    // cacheTime: 10,
    // onSuccess: () => console.log("SUCCESS fetching planets")
    // onError: () => console.log("ERROR fetching planets")
  })
  console.log('resolvedData', resolvedData)

  const render = () => {
    if (status === "loading") {
      return <div>Loading...</div>
    }
    else if (status === "error") {
      return <div>Error fetching data</div>
    }
    else if (status === "success") {
      return (
        <>
          <button
            onClick={() => setPage(old => Math.max(old - 1, 1))}
            disabled={page === 1}
            >
              Previous page
          </button>
          <span>{ page }</span>
          <button
            onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}
            disabled={!latestData || !latestData.next}
            >
              Next page
          </button>

          <div>
            {resolvedData.results.map((planet) => <Planet key={planet.name} planet={planet} />)}
          </div>
        </>
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
