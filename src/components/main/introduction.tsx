import Image from "next/image";
import Typography from "./typography";
import { Button } from "../ui/button";

export function Introduction() {
  return (
    <section
      className="min-h-[90vh] w-full flex flex-col-reverse gap-4 sm:flex-row p-3 sm:px-8 md:py-16 lg:py-32 items-center"
      id="introduction"
    >
      <div>
        <Image
          src="/images/dragan.jpg"
          alt="Dragan Ignjatovic"
          width={400}
          height={400}
          className="rounded-md mx-auto mb-4 shadow-lg shadow-primary/50 border-2 border-primary/30"
        />
        <div className="w-full">
          <a
            href="https://drive.google.com/file/d/1TTNSMsA1bRQ-SFHh6zeeTkmrw8vFMCXe/view?usp=drive_link"
            title="Dragan Ignjatovic CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"default"} className="w-full">
              <Typography
                variant="h5"
                className="text-center"
                text="Download CV"
              />
            </Button>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full mx-auto justify-center items-center py-0 sm:py-8 px-0 sm:px-4">
        <div className="space-y-4">
          <Typography
            variant="h1"
            className="sm:text-left text-center"
            text="Hi, I'm Dragan Ignjatovic!"
          />
          <Typography
            variant="h2"
            className="sm:text-left text-center"
            text="Web Developer & Data Science Enthusiast"
          />
        </div>
        <Typography
          variant="p"
          className="text-justify"
          text="Passionate about web development and data science since a young age, I’ve always had a knack for math, logic, and problem-solving. I love hands-on learning and tackling challenges, as seen in my project Simplify Productivity, where I worked with tools like TypeScript, Next.js, and PostgreSQL. I believe in learning through practice and breaking down tasks into manageable steps. Looking ahead, I’m focused on becoming a leader in data science."
        />
      </div>
    </section>
  );
}
