import React, { useMemo } from 'react'
import {useParams,Navigate,useNavigate} from 'react-router-dom';
import { getHeroById } from '../../Selectorhero/getHeroById';



const Hero = () => {


 const nave = useNavigate();

const handReturn = ()=>{

nave(-1)

}
 
const {heroid} = useParams();
const hero = useMemo(() => getHeroById(heroid),[heroid]);

if(!hero){

   return <Navigate to ='/'/>
}
const {
    id,
    superhero,
    publisher, 
    alter_ego,
    first_appearance,
    characters
    } =hero;
    
const imagenPath= `/assets/${id}.jpg`;

  return (
    <div className='row mt-5'>
     <div className='col-4'>
     <img 
     src={imagenPath}
     alt={superhero}
     className="img-thumbnail animate__animated animate__fadeInLeft"
/>

     </div>

     <div className="col-8">
     <h3>{superhero}</h3>
     <ul className="list-group">
     <li className='list-group-item'><b>Alter ego:</b>{alter_ego}</li>
     <li className='list-group-item'><b>publisher:</b>{publisher}</li>
     <li className='list-group-item'><b>first appearance:</b>{first_appearance}</li>
     <h5>characters</h5>
     <p>{characters}</p>
     </ul>
     <button className=' btn btn-outline-info' onClick={handReturn}>Regresar</button>
     </div>

    </div>
  )
}

export default Hero;