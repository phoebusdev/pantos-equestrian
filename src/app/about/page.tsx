import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pantos Equestrian - Premier Horse Training Facility",
  description: "Learn about our rich equestrian heritage, expert trainers, and commitment to excellence in horse training and rider development.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Pantos Equestrian"
        description="Discover our passion for equestrian excellence, from our humble beginnings to becoming a premier destination for horse training and rider development."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
