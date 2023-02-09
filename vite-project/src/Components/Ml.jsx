import React from 'react'

const Ml = (props) => {
    return (
        <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
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