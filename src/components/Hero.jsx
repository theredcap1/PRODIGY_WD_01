import logo from "../assets/9391714.png";

export default function Hero() {

    return (
        <div className="py-32 flex flex-col items-center justify-center h-24 lg:gap-12 min-h-max">
            <img src={logo} alt="" className="h-32 w-auto"/>
            <h1 className="text-2xl lg:text-5xl font-medium text-center" id="Events">Welcome to Flexcol</h1>
            <h4 className="text-center m-6 lg:m-0 text-2xl font-extralight">Explore a world of development through our
                experience</h4>
            <a href="/login" className="border-neutral-400 border-2 rounded-3xl py-3 px-8 hover:cursor-pointer" id="Contact">Join Us</a>
        </div>
    );
}