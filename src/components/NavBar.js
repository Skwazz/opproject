import React from "react";
import { GiPirateFlag } from 'react-icons/gi';
import logo from "../images/one-piece-logo.png"
import a from "../images/a.png"
import c from "../images/c.png"
import s from "../images/s.png"
import e from "../images/e.png"



export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border-b  mb-3 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-black"
                            href="src/components#pablo"
                        >
                           <img src={logo} alt='logo' className='w-full h-20 ' />
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <GiPirateFlag className='text-black text-4xl'/>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <img src={a} className=' h-8 ml-3' />
                                    Card List
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <img src={s} className=' h-8 ml-3' />
                                    Deck Builder
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <img src={c} className=' h-8 ml-3' />
                                    My Decks
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <img src={e} className=' h-8 ml-3' />
                                    Something
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}