import React from 'react'
import ResidentRyM from './ResidentRyM'
import './Residents.scss'

function ResidentsApi( {residents} ) {

  return (
    <div className='residents'>
      {residents?.length > 0 ? (<>{
      residents.map(resident=>  
      (  <ResidentRyM key={resident}url={resident}/>
      ))}</>) : (<p className='residents__null' >No hay Residentes</p>)}
    </div>
  )
}

export default ResidentsApi
