import { TextReveal } from "@/components/magicui/text-reveal";


const AboutText = () => {
    return (
        <div className="z-10 flex mt-0 items-center justify-center rounded-lg p-4 w-full">
            <div className="flex items-center justify-center text-lg leading-tight">
                <TextReveal text="My Next Mission is to learn WEB 3.0 as I already know much about cryptocurrency and learning SolidityJS" />
            </div>
        </div>
    );
};

export default AboutText;
