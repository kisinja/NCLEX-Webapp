import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let navLinks = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Book a Session',
            path: '/booking'
        },
        {
            name: 'Contact',
            path: '/contact',
        },
        {
            name: 'Login',
            path: '/login'
        }
    ];

    return (
        <nav className="py-4 px-[5%] bg-primary text-light-background shadow-lg">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-lg font-bold">NCLEX Guidance</h1>

                <ul className="md:flex space-x-6 hidden">

                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${item.path}`} className="hover:text-accent">
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                </ul>

                {/* Hamburger menu */}
                <div className="block lg:hidden cursor-pointer" onClick={toggleMenu}>
                    {
                        !isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )
                    }
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <ul className="absolute bg-primary left-0 right-0 h-screen flex flex-col gap-8 items-center justify-center">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <NavLink to={`${item.path}`} className="hover:text-accent" onClick={toggleMenu}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar