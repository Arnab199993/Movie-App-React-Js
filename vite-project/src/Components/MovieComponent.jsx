import React from 'react'
import "./MovieComponent.css"

const MovieComponent = (props) => {
    const { Title, imdbId, Poster } = props.movie
    return (
        <div className='MovieContainer' onClick={(() => {
            props.setselectedmovie(imdbId)
        })}>
            <img className='Coverimage' src={Poster} />

            <span className='MovieName'>{Title}</span>
            <div className='column'>
                <span>{imdbId}</span>
            </div>



        </div>
    )
}

export default MovieComponent