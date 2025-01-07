import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Team from "../components/Team.jsx";
import Events from "../components/Events.jsx";
export default function Home() {
    document.title = "Home - Flexcol";
    return (
        <>
            <Hero/>
            <Vision/>
            <Team/>
            <Events/>
        </>
    );
}
