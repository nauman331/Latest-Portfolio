import { aboutskills } from "@/utils/exports";

const SkillsComp: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-center justify-center">
            {Object.entries(aboutskills).map(([skill, { icon, color }], index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-5 py-4 
                     text-gray-900 md:font-semibold text-lg transition-all transform cursor-pointer font-bold"
                    style={{
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color;
                        e.currentTarget.style.color = "#ffffff"; // Change text color to white
                        e.currentTarget.querySelector("svg")!.style.color = "#ffffff"; // Change icon color to white
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffffff"; // Reset background
                        e.currentTarget.style.color = "#1f2937"; // Reset text color to default gray-900
                        e.currentTarget.querySelector("svg")!.style.color = color; // Reset icon color
                    }}
                >
                    {icon}
                    <span className="md:text-[1rem] text-[10px]">{skill}</span>
                </div>
            ))}
        </div>
    );
};

export default SkillsComp;
