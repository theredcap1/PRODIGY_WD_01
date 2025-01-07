import logo from '../assets/9391714.png';
import {X, Menu} from 'lucide-react';
import elements from '../assets/NavElements.js';

export default function NavBar() {
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const close = document.getElementById('close');
        const buttons = document.getElementById("nav-buttons");
        buttons.classList.toggle('top-[-100vh]');
        buttons.classList.toggle('top-[11.2vh]');
        menu.classList.toggle('hidden');
        close.classList.toggle('hidden');
    }
    function view(id) {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        console.log(id);
    }
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md py-6 border-b-neutral-400 border-b-2">
            <div className="container px-0 mx-auto lg:px-20 relative w-full">
                <div className="flex justify-between items-center">
                    <div className="flex w-full items-center flex-shrink-0 justify-between px-8 gap-24 lg:w-fit">
                        <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}><img src={logo} alt="" className="h-12 w-auto cursor-pointer"/></button>
                        <button className="sticky text-white lg:hidden text-3xl z-50 cursor-pointer" id="menu" onClick={toggleMenu}><Menu
                            color="white"/></button>
                        <button className="sticky text-white hidden lg:hidden text-3xl z-50 cursor-pointer" id="close" onClick={toggleMenu}><X
                            color="white"/></button>
                    </div>
                    <div className="absolute lg:static lg:min-h-fit lg:w-auto lg:bg-transparent bg-neutral-800 top-[-100vh] pt-8 pb-8 lg:pt-0 lg:pb-0 transition-all duration-400 text-center w-full" id="nav-buttons">
                        <ul className="flex flex-col lg:flex-row justify-between items-center md:gap-[4vw] gap-12">
                            {elements.map((element, index) => (
                                <li key={index} className="text-white cursor-pointer transition-all hover:text-neutral-300 duration-300"><button onClick={() => view(element)}>{element}</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
