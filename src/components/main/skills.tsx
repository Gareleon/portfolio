"use client";

import { Button } from "../ui/button";
import Typography from "./typography";
import { Progress } from "../ui/progress";
import { useState } from "react";
import { dataScience, fullStackDevelopment } from "../data/skills-data";

export function Skills() {
  const [isFullStack, setIsFullStack] = useState(true);
  const skillToggle = (state: boolean) => {
    setIsFullStack(state);
  };

  const skills = isFullStack ? fullStackDevelopment : dataScience;

  return (
    <section
      className="h-auto min-h-screen w-full flex flex-col gap-6 p-3 sm:px-8 md:py-16 items-center justify-start"
      id="skills"
    >
      <Typography text="Skills" variant="h1" />
      <div className="max-w-screen-lg w-full bg-primary/10 flex flex-col sm:flex-row items-center justify-center mt-6">
        <Button
          variant={`${isFullStack ? "default" : "outline"}`}
          className="w-full sm:w-[50%]"
          onClick={() => skillToggle(true)}
        >
          Full Stack Development
        </Button>
        <Button
          variant={`${isFullStack ? "outline" : "default"}`}
          className="w-full sm:w-[50%]"
          onClick={() => skillToggle(false)}
        >
          Data Science
        </Button>
      </div>
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {skills.map((skill) => (
          <div
            className="flex flex-col gap-4 p-4 items-center justify-start border border-primary/25 rounded-md"
            key={skill.title}
          >
            <div className="flex items-center gap-2">
              <skill.icon className="h-6 w-6" />
              <Typography text={skill.title} variant="h4" />
            </div>
            <div className="w-full">
              {skill.description.map((item, index) => (
                // LIST OF SKILLS
                <div
                  className="w-full grid grid-cols-2 grid-rows-auto gap-4 justify-between items-center space-x-2 mb-2"
                  key={index}
                >
                  {/* ICON AND TEXT */}
                  <div className="flex justify-center items-center gap-2">
                    <div className="inline-block">
                      {item.icon ? item.icon : ""}
                    </div>

                    <Typography
                      text={item.name as string}
                      variant="h6"
                      className="inline-block w-[50%]"
                    />
                  </div>
                  {/* PROGRESS BAR */}
                  <div className="">
                    <Progress value={item.progress as number} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
