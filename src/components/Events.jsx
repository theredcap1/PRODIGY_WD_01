import events from "../assets/Events.js"
import pic from "../../public/0-event-announcement-newsletter-thumb.jpg"

export default function Events() {
    return (
        <div className="bg-cyan-950 p-6 flex flex-col items-center gap-14 pb-16" id="Events">
            <h1 className="mt-24 text-2xl lg:text-5xl text-center">
                Upcoming events
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 px-3">
                {
                    events.map((event, i) => (
                        <div className="w-72 bg-sky-900 rounded-3xl" key={i}>
                            <img src={pic} className="rounded-t-3xl"
                                 alt=""/>
                            <div className="flex flex-col justify-center p-6 text-white flex-wrap-reverse">
                                <h1 className="text-bold text-3xl mb-2 md:mb-4">{event.name}</h1>
                                <h4 className="text-base mb-2 md:mb-4">{event.date}</h4>
                                <p className="text-sm text-neutral-400">{event.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}