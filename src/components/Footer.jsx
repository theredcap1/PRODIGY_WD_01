import logo from '../assets/9391714.png'
import nav from '../assets/NavElements.js'

export default function Footer() {
    return (
    <footer className="border-t py-10 border-neutral-700 text-white" id="Footer">
        <div
            className="flex flex-col items-center lg:items-start lg:flex-row justify-evenly gap-4 lg:grid-cols-4 px-6 lg:px-24 w-full lg:gap-0">
            <img src={logo} alt="" className="h-6"/>
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Discover Us
                    </h3>
                    <ul className="space-y-2 flex flex-col items-center lg:relative lg:items-start">
                        {
                            nav.map((item, index) => (
                                <li key={index} className="hover:cursor-pointer">{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Support
                    </h3>
                    <ul className="space-y-2 flex flex-col items-center lg:relative lg:items-start">
                        <li><a href="/help" className="text-neutral-300 hover:text-white transition-all duration-500">Help</a></li>
                        <li><a href="/login" className="text-neutral-300 hover:text-white transition-all duration-500">Login</a>
                        </li>
                    </ul>
                </div>
                <form action="" className="flex items-center rounded-lg pr-2 h-auto bg-neutral-800 lg:">
                    <input type="email" name="email" id="" placeholder="E-mail"
                           className="bg-neutral-800 py-3 px-6 rounded-lg w-48 lg:w-64 m-6"/>
                        <button type="submit" className="bg-neutral-950 rounded-lg p-3 h-16">Subscribe</button>
                </form>
            </div>
    </footer>
    )
}