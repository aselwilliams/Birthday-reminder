import React from 'react'

function List({people}) {
  return (
    <div>
        {people.map((person)=>{
            const {id, name, age, image} = person;
            return(
<img src={image} alt={name}/>

            )
        })}
    </div>
  )
}

export default List