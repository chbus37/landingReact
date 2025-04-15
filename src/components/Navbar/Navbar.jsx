import React from 'react'
import Logo from '../../assets/Logo.png';
import { useState } from 'react';


const navbarLinks = [
    {
        id: 1,
        title: "Inicio",
        Link: "/"
    },
    {
        id: 2,
        title: "Nosotros",
        Link: "#"
    },
    {
        id: 3,
        title: "Contacto",
        Link: "#"
    },
    {
        id: 4,
        title: "Soporte",
        Link: "#"
    },
]

const navbarRedes = [
    {
        id: 1,
        title: "Instagram",
        Link: "https://www.instagram.com",
        icon: 'bi bi-instagram'
    },
    {
        id: 2,
        title: "Tik Tok",
        Link: "https://www.tiktok.com",
        icon: 'bi bi-tiktok'
    },
    {
        id: 3,
        title: "Facebook",
        Link: "https://www.facebook.com",
        icon: 'bi bi-facebook'
    }
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-md z-50'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                {/* Logo navbar */}
                <div>
                    <img src={Logo} alt='logo del sitio' className='w-[100px]' />
                </div>

                {/* Boton de Hamburguesa */}
                <button onClick={toggleMenu} className='text-white cursor-pointer md:hidden'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        {isOpen ? (<path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />) : (<path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />)}
                    </svg>
                </button>

                {/* Navegacion  */}
                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-white sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110 transform inline-block duration-300' href={link.Link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block transition-transform duration-300 transform hover:scale-125'
                                    href={link.Link}>
                                    <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}>

                                    </i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>



            </div>
            {/* Navegacion Mobile */}
            <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link) => (
                        <li className='py-2 text-center' key={link.id}>
                            <a className='text-white hover:text-sky-200' href={link.Link} onClick={() => setIsOpen(false)}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                {/* Menu Redes */}
                <ul className='flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center'>
                    {navbarRedes.map((link) => (
                        <li key={link.id}>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block'
                                href={link.Link} onClick={() => setIsOpen(false)}>
                                <i className={`${link.icon} text-lg text-white hover:text-sky-200 `}>

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>




        </nav>
    )
}

export default Navbar
