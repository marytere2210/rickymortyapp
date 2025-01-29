import React from 'react'
import './Location.scss'
function LocationRyM({location}) {
  const popCount = location?.residents?.length
  const counText = popCount===1 ? 'Resident' : 'Residents'
  const locationId = location?.id?.toString().padStart(3, '0')
     return (
    <div className='location'>
      <div className='location__content'> 
        <h2 className='location__name'>
          {location?.name} #{locationId}</h2>
        <ul className='location__ul'>
          <li className='location__ul_li'>Type:<span className='location__li_span'> {location?.type}</span></li>
          <li className='location__ul_li'>Dimension: <span className='location__li_span'> {location?.dimension}</span></li>
          <li className='location__ul_li'>Population:<span className='location__li_span'> {popCount} {counText}</span></li>
        </ul>
        </div>
    </div>
  )
}

export default LocationRyM
