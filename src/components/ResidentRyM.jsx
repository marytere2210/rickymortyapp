import React, { useEffect } from 'react'
import useRyMApi from '../hooks/useRyMApi'
import './Resident.scss'
function ResidentRyM({url}) {
  const {data, loading, error, request} = useRyMApi()
  useEffect(()=>{
    request(`${url}`)
  },[url])

  const estatus = {
    Alive:'🟢',
    Dead:'🔴',
    unknown:'🔵'
  }

  const episodesCount = data?.episode?.length
  const counText = episodesCount === 1 ? 'Episode' : 'Episodes'
  
    return (
    <div className='resident'>
      {loading ? <p>Cargando...</p> :
      <>
      <div className='resident__header'>
        <img className='resident__img'  src={data?.image} alt={data?.name} />
        <span className='resident__status'>{estatus[data?.status]}{data?.status}</span>

      </div>
      <div className='resident__body'>
          <h3 className='resident__name'>{data?.name}</h3>
          <ul className='resident__list'>
            <li className='resident__icon'>Space:<span className='resident__span'>{data?.species}</span></li>
            <li className='resident__icon'>Origin:<span className='resident__span'>{data?.origin.name}</span></li>
            <li className='resident__icon'>Episodes:<span className='resident__span'>{episodesCount} {counText} </span></li>
          </ul>
      </div>
      </>
      }
    </div>
  )
}

export default ResidentRyM
