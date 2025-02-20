import SkillsComp from "@/components/mycomponents/skills";
import About from "./about";

const Skills = () => {
    return (
        <section className="container  my-28">
             <h2 className="text-4xl mt-28 font-bold text-center mb-14 text-gray-900 tracking-tight">
        My <span className="text-red-600">Skills</span>
      </h2>
            {/* Skills Section */}
            <div className="w-full flex items-center justify-center">
                <SkillsComp />
            </div>
            {/* About Section*/}
            <About />
        </section>
    );
};

export default Skills;
