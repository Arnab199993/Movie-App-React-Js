import React from 'react'
import "./MovieComponent.css"
import "./Info.css"
import { useLocation } from 'react-router-dom'
const Info = (props) => {
    const { state } = useLocation()
    console.log(location)
    return (
        <div style={{ color: 'white' }}>
            <h1>
                {state.title}
            </h1>
        </div>
    )
}

export default Info