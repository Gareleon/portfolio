"use client";

import Typography from "./typography";
import { projectsData } from "../data/projects-data";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

export function Projects() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null as number | null);
  const [itemsPerPage, _setItemsPerPage] = React.useState(4);
  const totalProjects = projectsData.length;

  React.useEffect(() => {
    setTotalPages(Math.ceil(totalProjects / itemsPerPage));
  }, [totalProjects, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handlePreviousPageChange = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleNextPageChange = () => {
    setCurrentPage((prev) => (prev === totalPages ? totalPages : prev + 1));
  };
  const slicedProjects = projectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      className="min-h-max w-full flex flex-col gap-6 p-3 sm:px-8 md:py-16 items-center justify-start "
      id="projects"
    >
      <Typography text="Projects" variant="h1" />
      <div className="w-full h-fit h-min-max p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-start items-start">
        {slicedProjects.map((project) => (
          <div
            className="flex flex-col gap-4 p-3 items-center justify-start border border-primary/25 rounded-sm w-full"
            key={project.title}
          >
            <div className="flex-col items-center justify-center gap-2 w-full relative group ">
              <div className=" bg-gradient-to-b from-slate-500/50 to-primary/30 rounded-sm w-full h-full hidden group-hover:flex justify-center items-start absolute z-30 top-0 left-[50%] translate-x-[-50%] transition-all duration-500 ease-in-out ">
                <Typography
                  text={project.title}
                  variant="h4"
                  className="text-center text-white"
                />
              </div>

              <div className="w-full">
                <AspectRatio
                  ratio={16 / 9}
                  className="rounded-sm overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={600}
                    className="group-hover:scale-125 transition-all duration-500 ease-in-out "
                  />
                </AspectRatio>
              </div>
            </div>
            <Typography
              text={project.description}
              variant="p"
              className="hidden sm:block leading-tight text-muted-foreground"
            />
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
              <div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={`link`}>
                    <Typography text="View Project" variant="h5" />
                  </Button>
                </Link>
              </div>

              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <Badge variant="secondary" key={index}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-full mt-4">
          <Pagination className=" hover:cursor-pointer w-fit">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePreviousPageChange()}
                />
              </PaginationItem>
              {Array.from({ length: totalPages as number }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => handlePageChange(i + 1)}
                    isActive={i + 1 === currentPage}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={() => handleNextPageChange()} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
