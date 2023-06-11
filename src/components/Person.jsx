import React from 'react'

function Person({person}) {
  return (
    <div>
           <h2 className='font-bold pt-4 mt-2'>Hi I'am {person.name}. I'm {person.age} years old and my skill is {person.skill}</h2>
    </div>
  )
}

export default Person