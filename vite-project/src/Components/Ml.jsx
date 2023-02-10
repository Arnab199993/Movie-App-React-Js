import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
const Ml = (props) => {
    const [selectedmovie, setselectedmovie] = useState()
    const navigate = useNavigate()
    console.log(props)
    const click = (data) => { navigate("info", { state: data }) }
    // navigate("./info")
    return (
        <div className='col-3'  >
            <div className="card" style={{ width: "18rem", height: "300px", marginTop: "40px", marginLeft: "40px", cursor: "pointer" }} onClick={(() => click(props))}>
                <img className="card-img-top" src={props.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Ml