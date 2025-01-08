"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Typography from "./typography";
import Image from "next/image";
import { ThemeToggleButton } from "../theme/toggle-button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Simplify Problems",
    href: "https://simplifyproblems.com",
    description:
      "A website offering web development, design, and custom solutions.",
  },
  {
    title: "Simplify Productivity",
    href: "https://www.simplifyproductivity.com",
    description: "An app for personal development and budget management.",
  },
  {
    title: "Melissa Web-Shop",
    href: "https://melissa-webshop-frontend.vercel.app",
    description: "An e-commerce platform with a seamless shopping experience.",
  },
  {
    title: "Gan-D DOO",
    href: "https://gareleon.github.io/gan-d-website/",
    description:
      "A clean and visually appealing company website highlighting services.",
  },
  {
    title: "25 React Mini-Projects",
    href: "/docs/primitives/tabs",
    description:
      "A collection of mini-projects showcasing React concepts and features.",
  },
  {
    title: "Other Projects",
    href: "/docs/primitives/tooltip",
    description:
      "A showcase of additional projects solving specific challenges.",
  },
];

export function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex justify-between items-center shadow-sm rounded-md fixed top-0 left-0 right-0 z-50 bg-background/90">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Typography text="Dragan Ignjatovic" variant="h5" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.85fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                      //   href="/"
                    >
                      <Image
                        src="/images/dragan.jpg"
                        alt="Dragan Ignjatovic"
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4"
                      />
                      <Typography text="Full Stack Developer" variant="h6" />

                      <Typography
                        text="Crafting accessible, customizable, and open-source solutions for modern web development."
                        variant="p"
                        className="leading-tight text-muted-foreground"
                      />
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#introduction" title="Introduction">
                  A brief overview of who I am and what I do.
                </ListItem>
                <ListItem href="#skills" title="Skills">
                  A list of my expertise, including web development, design, and
                  more.
                </ListItem>
                <ListItem href="#contact-form" title="Contact">
                  Get in touch with me for inquiries or collaborations.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <a href="#projects" title="Projects">
                <Typography text="Projects" variant="h5" />
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    target="_blank"
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="space-x-3 items-center hidden sm:flex">
        <ThemeToggleButton />
        <a href="#contact-form" title="Link to contact-form">
          <Button variant="default">
            <Typography text="Contact" variant="h5" />
          </Button>
        </a>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
