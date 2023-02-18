import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ml from './Ml'

const MlList = (props) => {
    const [array, setarray] = useState([])
    const callapi = (() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=29b9d662eda4cb4c2722b797b8673c36").then((response) => {
            console.log(response)
            setarray(response.data.results)
        }).catch((err) => {
            console.log(err)
        })
    })
    useEffect(() => {
        callapi()
    }, [])
    console.log(array)
    return (
        <div className='row'>
            {
                array.map((ele) => {
                    return <Ml key={ele.id} image={`https://image.tmdb.org/t/p/original/${ele.poster_path}`} title={ele.title} text={ele.release_date} overview={ele.overview} media_type={ele.media_type} release_date={ele.release_date} />
                })
            }

        </div>
    )
}

export default MlList