import {React, useState} from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        // <div>
        //     <nav className="inline-flex items-baseline">
        //         <div className="navigation-bar">
        //             <div id="navigation-container">
        //                 <img src="logo.png"/> 
        //                 <ul>
        //                     <li><Link to="">Home</Link></li>
        //                     <li><Link to="/pacientes">Pacientes</Link></li>
        //                     <li><Link to="/tareas">Tareas</Link></li>
        //                     <li><Link to="/pagos">Pagos</Link></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <nav className="w-full bg-white shadow border border-green">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <h2 className="text-2xl font-bold">LOGO</h2>
                    </a>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-green-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="">Home</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/pacientes">Pacientes</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/tareas">Tareas</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/pagos">Pagos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;