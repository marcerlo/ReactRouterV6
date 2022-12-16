import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';


const SearchSreem = ({ history }) => {

  const Filtroshero = heroes;
  const [formValues,handleInputChange] = useForm({
      searchText:''
    } );

    const {searchText} = formValues;


const handelSearch = (e) =>{
e.preventDefault();
history.push(`?q=${searchText}`);
}
  return (
    <div>

    <h1> Busqueda </h1>
    <hr></hr>
  <div className='row'>
  <div className='col-5'>
    <h4> Busqueda formulario</h4>
    <hr></hr>
    <form onSubmit={handelSearch}>
    
    <input type='text'
    placeholder='fin your hero'
    className='form-control'
    name='searchText'
    value={searchText}
    onChange={handleInputChange}></input>
<button type='submit' 
className='btn mt-3 btn-block btn-dark'> Busqueda...</button>
    </form>
    
    </div>
    
    <div className='col-7'>

    <h4>Rersultados</h4>
    <hr></hr>
    {
      Filtroshero.map(hero => (<HeroCard
        key={hero.id}
        {...hero}
       />
        ))
    }
    </div>
  </div>
   </div>
   
  )
}

export default SearchSreem