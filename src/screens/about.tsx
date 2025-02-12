import Globe from "@/components/mycomponents/globe";
import AboutText from "@/components/mycomponents/about";

const About = () => {
    return (
        <section className="container flex flex-col md:flex-row items-center justify-center gap-10 py-14">
            {/* Left: Globe - Stays at top */}
            <div className="md:w-[30%] w-full flex justify-center self-start">
                <Globe />
            </div>

            {/* Right: Text Reveal - Adjusted height */}
            <div className="md:w-[70%] w-full flex items-center justify-center">
                <AboutText />
            </div>
        </section>
    );
};

export default About;
