import React from 'react'
import { useRef, useState} from 'react'
import './SearchForm.scss'

function SearchApi({setSearch} ) {
  const inputRef = useRef(null)
  const [error, setError] = useState(null)

 const handleSubmit = (e) =>{
   e.preventDefault()
     const value = inputRef.current.value

      if(!value){
        setError('Ingrese un ID')
      }
     else if(+value < 1 || +value > 126) {
      setError('Por favor ingrese un numero entre 1 y 126')
     }
     else if (isNaN(value)) {
      setError('El ID debe ser un número');
    } 
      else{
      setError('');
      setSearch(value); 
      inputRef.current.value = '';
    }
 }
 return (
  <>
  <form className='search' onSubmit={handleSubmit}>
  <div className='container'>
  <input className='search__input'type="text" ref={inputRef} placeholder='Escribe un ID'/>
  <button className='search__btn'>Search</button>
  {error && <p className='search__error'>{error}</p>}
  </div>
  </form>
  </>
    
  )
}

export default SearchApi
