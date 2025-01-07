import data from "../assets/TeamData"
export default function Team() {
    let div;


    return (
        <div className="p-6 flex flex-col items-center gap-14" id="Team">
            <h1 className="mt-24 text-2xl lg:text-5xl text-center">
                Team
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 m-auto">
                {data.map((item, i) =>
                    <div
                        className="bg-neutral rounded-md p-6 text-md border border-neutral-800 lg:flex-col-reverse lg:flex place-self-center" key={i}>
                        <div
                            className="flex flex-col items-center flex-wrap overflow-hidden h-fit lg:flex-row lg:items-start lg:mt-8 mb-8 lg:mb-0">
                            <img src={item.picture} alt=""
                                 className="rounded-full h-48 lg:h-12 lg:mr-6 mb-8 lg:mb-0 border border-neutral-300"/>
                            <div className="text-center lg:text-left">
                                <h6 className="text-neutral-300">
                                    {item.name}
                                </h6>
                                <span className=" text-neutral-600">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                        <p className="text-neutral-500 text-center lg:text-left">{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}