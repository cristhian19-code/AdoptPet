import patas from '../assets/patas.png'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <nav className="bg-white/80 px-2 py-5 flex flex-col md:flex-row gap-10 md:0 justify-between md:items-center z-10 fixed w-full top-0">
            <motion.img
                onClick={handleShowNavbar}
                className='cursor-pointer md:mb-0'
                animate={{ scale: [1, 0.5 ,1.05, .9] }}
                transition={{ duration: 1}}
                src={patas} width={40}
            >
            </motion.img>
            {
                showNavbar && (
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1}}
                        className="flex flex-col md:flex-row items-start md:items-center gap-10">
                        <li className="font-medium flex justify-center cursor-pointer relative text-orange-400 transition-colors ml-3 rounded-md after:h-0.5 after:w-0 after:transition-all hover:after:w-full after:duration-500 after:absolute after:-bottom-2 after:bg-orange-400">Busca tu mascota</li>
                        <li className="font-medium flex justify-center cursor-pointer relative text-orange-400 transition-colors ml-3 rounded-md after:h-0.5 after:w-0 after:transition-all hover:after:w-full after:duration-500 after:absolute after:-bottom-2 after:bg-orange-400">Servicios</li>
                        <li className="font-medium flex justify-center cursor-pointer relative text-orange-400 transition-colors ml-3 rounded-md after:h-0.5 after:w-0 after:transition-all hover:after:w-full after:duration-500 after:absolute after:-bottom-2 after:bg-orange-400">Nosotros</li>
                        <li className="bg-orange-400 text-white transition-colors duration-500 px-4 py-2 rounded-md cursor-pointer">Contactenos</li>
                    </motion.ul>
                )
            }
        </nav>
    );
};
