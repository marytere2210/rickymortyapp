import { useEffect,useState } from 'react';
import './App.scss';
import useRyMApi from './hooks/useRyMApi';
import LocationRyM from './components/LocationRyM';
import ResidentsApi from './components/ResidentsApi';
import SearchApi from './components/SearchApi';

const urlApi='https://rickandmortyapi.com/api';

function App() {
  const randomloccation = Math.floor(Math.random() * 126 )+ 1
  const {data, loading, error, request} = useRyMApi()
  const [search, setSearch]= useState(randomloccation)
 
  useEffect(()=>{
    request(`${urlApi}/location/${search}`)
  },[search])

  return (
<div className='container'>
  <div className='container__header'>
  <img className='container__img' src="./rym.webp" alt="RICK&MORTY" />
  </div>
  <SearchApi setSearch={setSearch} />
  {loading ? <p>Cargando...</p> : <LocationRyM  location={data }/> }
  <ResidentsApi residents ={data?.residents|| []} />
  
</div>  
)
}

export default App

