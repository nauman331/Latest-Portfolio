import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const Scroll = () => {
    return (
        <VelocityScroll
            className="text-[clamp(2rem,5vw,6rem)] font-bold text-primary px-4 my-14 md:px-8"
            style={{
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                animationDuration: "15s",
                animationTimingFunction: "linear",
                WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            }}
        >
            Frontend Developer &nbsp; | &nbsp; Backend Developer &nbsp; | &nbsp; Full Stack Developer &nbsp; | &nbsp; Android Developer &nbsp; | &nbsp; iOS Developer &nbsp; | &nbsp; Cross-Platform Developer
        </VelocityScroll>
    );
};

export default Scroll;
