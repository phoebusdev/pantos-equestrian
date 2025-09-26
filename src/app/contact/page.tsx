import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Pantos Equestrian",
  description: "Get in touch with Pantos Equestrian to schedule a visit, book lessons, or inquire about boarding and training programs."
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to start your equestrian journey? Contact us to schedule a facility tour, book lessons, or learn more about our programs."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
