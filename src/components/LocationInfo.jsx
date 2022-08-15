import React from 'react'
import './LocationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <div className='location-container'>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>Type: </span><br />{location?.type}</li>
            <li><span>Dimension: </span><br />{location?.dimension}</li>
            <li><span>Population: </span><br />{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo