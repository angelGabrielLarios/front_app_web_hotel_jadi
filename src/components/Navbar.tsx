import { NavLink } from "react-router-dom"





export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-accent text-white-custom">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        {/* mobile */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent rounded-box w-52">
                            <li className="hover:bg-primary active:bg-primary font-extrabold focus:bg-primary"><a>Home</a></li>
                            <li><a>Más Información</a></li>
                            <li><a>Contactanos</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Hotel Jadi</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center px-1">
                        <li className="">
                            <NavLink to={`/`} className={({ isActive, isPending }) => {
                                return `px-3 py-1 rounded-full ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                            }}>Inicio
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={`/bedrooms`} className={({ isActive, isPending }) => {
                                return `px-3 py-1 rounded-full ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                            }}>Habitaciones</NavLink></li>
                        <li className="">
                            <NavLink to={`/location`} className={({ isActive, isPending }) => {
                                return `px-3 py-1 rounded-full ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                            }}>¿Dónde estamos?</NavLink></li>

                    </ul>
                </div>

                {/* desktop */}
                <div className="navbar-end hidden lg:flex">


                    <div className="lg:flex lg:items-center lg:gap-2">
                        <button className="btn btn-primary btn-sm px-4 rounded-full">Registrarse</button>
                        <button className="btn btn-secondary btn-sm px-4 rounded-full">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </>
    )
}
