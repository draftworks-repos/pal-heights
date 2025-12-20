import Hero from "./Sections/Hero";
import SectionOne from "./Sections/Detail";
import SectionTwo from "./Sections/Awards";
import SectionThree from "../sharedSections/Reviews";
import SectionFour from "./Sections/Connect";

export default function About() {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}
