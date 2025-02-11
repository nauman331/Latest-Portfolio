interface SkillsProps {
    skills: string[];
}

const SkillsComp: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div>
            {skills.map((skill, index) => (
                <h1 key={index}>{skill}</h1>
            ))}
        </div>
    );
};

export default SkillsComp;
