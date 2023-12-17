import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header flex items-center justify-between p-8 
        bg-black bg-opacity-30 backdrop-blur-xl">
            <NavLink to="/" className="w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-lg
            gradient-cyan-to-purple-tr hover:bg-gradient-to-r from-custom-gradient-0% to-custom-gradient-100% text-slate-200 hover:text-black">
                <p className="eth">NT</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-semibold">
                <button>  
                    <NavLink to="/about" className=
                    {({ isActive }) => isActive ? "bg-gradient-to-r from-custom-gradient-0% to-custom-gradient-100% bg-clip-text text-transparent" : "text-gradient-blue-to-purple-r" }>ABOUT</NavLink>
                </button>
                <button>
                    <NavLink to="/projects" className=
                    {({ isActive }) => isActive ? "bg-gradient-to-r from-custom-gradient-0% to-custom-gradient-100% bg-clip-text text-transparent" : "text-gradient-blue-to-purple-r"}>PROJECTS</NavLink>
                </button>
            </nav>
        </header>
    )
}

export default Navbar