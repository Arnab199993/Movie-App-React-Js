import React from 'react'
import "./MovieComponent.css"
import "./Info.css"
import { useLocation } from 'react-router-dom'
const Info = () => {
    const { state } = useLocation()
    console.log(location)
    return (
        <div style={{ color: 'white' }}>
            <h1>
                {state.title}
            </h1>
            <p>
                {state.overview}
            </p>
            <h4>
                {state.media_type}
            </h4>
            <h5>
                {state.release_date}
            </h5>
        </div>
    )
}

export default Info