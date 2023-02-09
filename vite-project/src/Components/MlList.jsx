import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ml from './Ml'

const MlList = () => {
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
    return (
        <div className='row'>
            {
                array.map((ele) => {
                    return <Ml key={ele.id} image={ele.backdrop_path} title={ele.title} />
                })
            }

        </div>
    )
}

export default MlList