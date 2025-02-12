import SkillsComp from "@/components/mycomponents/skills";
import About from "./about";

const Skills = () => {
    return (
        <section className="container">
            {/* Skills Section */}
            <div className="w-full my-28 flex items-center justify-center">
                <SkillsComp />
            </div>
            {/* About Section*/}
            <About />
        </section>
    );
};

export default Skills;
