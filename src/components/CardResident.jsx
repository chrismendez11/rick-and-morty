import React from 'react'
import useFetch from '../hooks/useFetch'
import './CardResident.css'

const CardResident = ({url}) => {

  console.log(url)

  const resident = useFetch(url)

  return (
    <article>
      <header>
        <img src={resident?.image} alt={`Image of ${resident?.name}`} />
        <div className='status'>
          <div className='circle'></div>
          <span>{resident && (resident?.status).toUpperCase()}</span>
        </div>
      </header>
      <div className='card-information'>
        <h3>{resident?.name}</h3>
        <ul>
          <li>
            <span>SPECIE</span><br />
            {resident?.species}
            </li>
          <li>
            <span>ORIGIN</span><br />
            {resident?.origin.name}
            </li>
          <li>
            <span>EPPISODES WHERE APPEAR</span><br />
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident