import React from 'react'

function Personaje({personje}) {

    const {name, species, image} =personje

    return (
        <div className='col-md-4 mb-2'>
            <div className='card'>
                <img src={image} alt={`image-${name}`} className='car-img-top'/>
                <div className='card-body'>
                    <h5>{name}</h5>
                    <p>{species}</p>
                </div>
            </div>

            
        </div>
    )
}

export default Personaje
