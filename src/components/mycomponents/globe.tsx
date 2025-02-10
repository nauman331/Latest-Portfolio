import { IconCloud } from "@/components/magicui/icon-cloud";
import { skills } from "../../utils/exports";

const Globe = () => {
    const images = skills.map(
        (skill) => `https://cdn.simpleicons.org/${skill}/${skill}`,
      );

      return (
        <>
        <IconCloud images={images} />
        </>
      )
}
export default Globe;