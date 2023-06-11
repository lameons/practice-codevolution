import React from 'react'
import Person from './Person';

function NameList() {
    const persons =[
        {
            id:1,
            name: 'jeco',
            age: 22,
            skill: 'pogi'
        },
        {
            id:2,
            name: 'kim',
            age: 21,
            skill: 'ganda'
        },
        {
            id:3,
            name: 'lame',
            age: 69,
            skill: 'lameon ko'
        }
    ]
    // -- connected Person.jsx 
    const personList = persons.map(person => (
        <Person key={person.id} person={person}/>
    ));
    const names = ['jeco' ,' glen' , 'eddie' , 'carl' , 'johnly'];
    const nameList = names.map((name, index) => <h2 key={index} >{index + 1}. {name}</h2> )
  return (
    <div>
        <h1>{personList}</h1>   
        
        <h1 className='text-2xl'>{nameList}</h1>
        {/* { 
        // MAP METHOD
            names.map(name => <h2>{name}</h2>)
        } */}
    </div>
  )
}

export default NameList