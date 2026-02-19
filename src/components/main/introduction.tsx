import Image from "next/image";
import Typography from "./typography";
import { Button } from "../ui/button";

export function Introduction() {
  return (
    <section
      className="min-h-[90vh] w-full flex flex-col-reverse gap-4 sm:flex-row p-3 sm:px-8 md:py-16 lg:py-32 items-center"
      id="introduction"
    >
      {/* Image + CV Button */}
      <div className="w-full sm:w-1/2 flex flex-col items-center">
        <Image
          src="/images/dragan.jpg"
          alt="Dragan Ignjatovic"
          width={400}
          height={400}
          className="rounded-md mx-auto mb-4 shadow-lg shadow-primary/50 border-2 border-primary/30"
        />
        <a
          href="https://drive.google.com/file/d/1TTNSMsA1bRQ-SFHh6zeeTkmrw8vFMCXe/view?usp=drive_link"
          title="Dragan Ignjatovic CV"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="default" className="w-full">
            <Typography
              variant="h5"
              className="text-center"
              text="Download CV"
            />
          </Button>
        </a>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6 w-full sm:w-1/2 mx-auto justify-center items-center sm:items-start py-0 sm:py-8 px-0 sm:px-4">
        <div className="space-y-4 text-center sm:text-left">
          <Typography variant="h1" text="Hi, I'm Dragan Ignjatovic!" />
          <Typography variant="h2" text="Full-Stack Web Developer" />
        </div>
        <Typography
          variant="p"
          className="text-justify"
          text="I specialize in building modern, responsive, and scalable web applications from start to finish. Using technologies like Next.js, React, TypeScript, Node.js, and PostgreSQL, I create solutions that are both functional and user-friendly. I focus on clean code, best practices, and delivering projects that solve real problems for users and businesses."
        />
      </div>
    </section>
  );
}
