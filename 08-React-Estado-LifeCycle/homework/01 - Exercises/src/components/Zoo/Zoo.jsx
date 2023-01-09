import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {

   const [zoo, setZoo] = React.useState({
      zooName:'', 
      animals:[],
      species:[], 
      allAnimals:[]
   })

   const handleInputChange = (e) => {
      // setZoo((zoo) => {return {zooName: e.target.value}})
      setZoo({...zoo, zooName: e.target.value})
   }

   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
         setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })
      )
      .catch((error) => console.log(error));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   
   const handleSpecies = (e) => {
      setZoo({...zoo, animals: zoo.allAnimals.filter(animal => animal.specie === e.target.value)})
   }

   const handleAllSpecies = () => {
      setZoo({...zoo, animals: zoo.allAnimals})
   }

   return (
      <div>
         <label>Zoo Name:</label>
         <input value={zoo.zooName} onChange={handleInputChange}/>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
         <Animals animals={zoo.animals}/>
      </div>
   )
}
