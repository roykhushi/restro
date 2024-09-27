import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((l,i)=> (
                <a key={i} href={l.href} target='_blank'>
                    {l.icon}
                </a>
            ))}
        </div>
        <p className='mt-8 text-center tracking-tighter text-neutral-50-500'>
            &copy; All rights reserved. 2024
        </p>
    </div>
  )
}

export default Footer