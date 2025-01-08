import { ButtonScrollTop } from "@/components/main/buttonTop";
import { ContactForm } from "@/components/main/contactForm";
import { Introduction } from "@/components/main/introduction";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <div className="h-fit min-h-max max-w-screen-xl mx-auto pt-14 px-4 sm:px-6 lg:px-8 space-y-6 ">
      <Introduction />
      <Skills />
      <Projects />
      <ContactForm />
      <ButtonScrollTop />
    </div>
  );
}
