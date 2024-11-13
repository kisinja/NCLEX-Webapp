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

                <ul className="flex space-x-6">

                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${item.path}`} className="hover:text-accent">
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    )
}

export default Navbar