import React, { useEffect } from 'react'
import "./MovieComponent.css"
import "./Info.css"
import { Navigate, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Info = () => {
    const Navigate = useNavigate()
    const { state } = useLocation()
    console.log(location)

    return (
        <div style={{ color: 'white' }}>
            <button onClick={(() => Navigate(-1))} >
                Back
            </button>
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
            <div>
                {state.image}
            </div>
        </div>
    )
}

export default Info