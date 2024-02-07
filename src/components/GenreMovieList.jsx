import React from 'react'
import GenreslList from '../constant/GenreslList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenreslList.genre.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:px-16px'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genreId={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList