import Globe from "@/components/mycomponents/globe";
import SkillsComp from "@/components/mycomponents/skills";
const Skills = () => {
    const skills = ["Reactjs", "Nodejs"]
    return (
        <section className="container flex items-center gap-5 md:flex-row flex-col-reverse">
            <div className="md:w-1/2 w-full h-[400px] flex items-center justify-center">
            <SkillsComp skills={skills}/>
            </div>
            <div className="md:w-1/2 w-full h-[400px] flex items-center justify-center">
            <Globe />
            </div>
        </section>
    )
}

export default Skills