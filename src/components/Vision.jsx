import pic from "../assets/collaboration-framework.jpg"
export default function Vision() {
    return (
        <div className="bg-cyan-950 pt-12 pb-24 px-6 flex flex-col items-center gap-14 h-auto" id="Vision">
            <h1 className="mt-24 text-2xl lg:text-5xl text-center">
                Vision
            </h1>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-10 lg:px-24">
                <img src={pic} alt="" className="h-32 lg:h-64 w-auto rounded-2xl"/>
                <div className="flex flex-col gap-8 w-[45vw] h-auto">
                    <h1 className="text-lg font-bold text-center">Main Focus</h1>

                    <h4 className="text-center font-light lg:text-start">
                        Our goal here at Flexcol is to redefine what&#39;s possible by crafting forward-thinking solutions that foster growth, creativity, and resilience. We strive to create a world where every challenge is met with an opportunity for transformation, supporting our clients as they navigate and thrive in an ever-evolving landscape.</h4>
                </div>
            </div>
        </div>
    );
}