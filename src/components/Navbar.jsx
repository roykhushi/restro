import React, { useState } from 'react'
import logo from "../assets/logo.png";
import LINKS from "../constants"
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    //for mobile view a toggle function
    const[mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
    //function for handle scroll
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        setMobileMenuOpen(false);
    }
  return (
    <nav className='fixed top-4 z-50 flex w-full flex-col items-center justify-center'>
        <div className='flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
            <img src={logo} alt="logo" width={80} height={22} />
            <div className='hidden space-x-6 lg:flex'>
                {LINKS.map((l,i)=>(
                    <a key={i} href={`#${l.targetId}`} className={`text-sm text-yellow-300 ${i!== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`}
                    onClick={(e)=> handleScroll(e, l.targetId)}>
                        {l.text}
                    </a>
                ))}
            </div>
            <div className='lg:hidden'>
                <button onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
                {mobileMenuOpen && (
                    <div className='w-full backdrop-blur-lg lg:hidden'>
                        {LINKS.map((l,i)=> (
                            <a key={i} href={`#${l.targetId}`} className='block p-4 uppercase tracking-tighter ' onClick={(e)=> handleScroll(e,l.targetId)}>
                                {l.text}
                            </a>
                        ))}

                    </div>
                )}
    </nav>
  )
}

export default Navbar