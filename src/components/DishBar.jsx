import React from 'react'

const DishBar = ({proj}) => {
  return (
    <div>
        <img src={proj.image} 
             alt={proj.title}
             className='rounded-3xl p-2'
        />
        <div className='p-4'>
            <h3 className='mb-2 text-2-xl font-bold tracking-tighter'>
                {proj.title}
            </h3>
            <p className='text-sm'>{proj.description}</p>
        </div>
    </div>
  )
}

export default DishBar