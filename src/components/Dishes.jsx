import React from 'react'
import {DISHES} from "../constants"
import DishBar from './DishBar'

const Dishes = () => {
  return (
    <section className='container mx-auto py-16' id='dishes'>
        <h2 className='mb-8 text-center text-3xl font-semibold tracking-tighter lg:text-4xl'>Our Dishes</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
            {DISHES.map((proj,i)=> (
                <DishBar key={i}
                proj={proj}
                />
            ))}

        </div>
    </section>
  )
}

export default Dishes