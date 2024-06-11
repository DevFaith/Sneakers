import React, { useCallback, useEffect, useState } from 'react'
import useQuery from '../hooks/useQuery';
import { isEmpty } from 'lodash';
const Shoe = (props) => {
  const query = useQuery();

  const [movie, setMovie] = useState({})


  useEffect(useCallback(() => {
    const imdb_id = query.get("imdb_id");
    console.log("Props:: IMDB ID ", imdb_id)
    fetch(`https://v3-cinemeta.strem.io/meta/movie/${imdb_id}.json`, { method: "GET" })
      .then(res => {
        if (res.status===200) return res.json() 
           throw new Error(res.statusText)
      })
      .then(({ meta }) => setMovie(meta))
      .catch(err => console.log(err))
  }, [query]), [])

  return (
    <>
      {!isEmpty(movie) && <div className="mb-8 p-6 bg-red-100 rounded-lg shadow-md flex items-center gap-4">
        <img src={movie.poster} alt={movie.name} className="w-1/2 h-1/2 object-cover rounded-md" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>
          <p className="text-gray-700">{movie.description}</p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {movie.cast.map((castName) => <li>{castName}</li>)}
          </ul>
        </div>
      </div>}
    </>
  );
}

export default React.memo(Shoe);
