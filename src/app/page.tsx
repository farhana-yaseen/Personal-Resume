import ContactInfo from "./components/ContactInfo";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";




export default function Home() {

  return (
    <div>
      <PersonalInfo/>
      <ContactInfo/>
      <SkillSection/>
      <EducationSection/>
      <ExperienceSection/>

    </div>
  );
}
