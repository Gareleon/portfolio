import React from "react";
import { LuYoutube } from "react-icons/lu";
import { MdCopyright, MdFacebook } from "react-icons/md";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full">
      <hr className="border-slate-400 w-full" />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Social Media Links */}
        <div className=" text-center space-y-6">
          <p>Connect with me on social media</p>
          <div className="space-x-6 text-2xl flex flex-wrap justify-center py-2">
            <a
              href=""
              title="Dragan Ignjatovic Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFacebook className="hover:text-primary" />
            </a>
            <a
              href="https://x.com/SimplifyProblem"
              title="Dragan Ignjatovic X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="hover:text-primary" />
            </a>
            <a
              href="https://github.com/Gareleon"
              title="Dragan Ignjatovic Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo className="hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/company/simplify-problems-llc"
              title="Dragan Ignjatovic Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo className="hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com/simplifyproblems/"
              title="Dragan Ignjatovic Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxInstagramLogo className="hover:text-primary" />
            </a>
            <a
              href="https://www.youtube.com/@SimplifyProblems"
              title="Dragan Ignjatovic Youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuYoutube className="hover:text-primary" />
            </a>
          </div>
        </div>
        {/* Company Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="mb-8 md:col-span-3 lg:col-span-2">
            <h5 className="text-2xl font-bold">Personal Portfolio</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <p className="text-lg">
              Crafting unique web solutions tailored to meet your goals. From
              stunning designs to robust development, I focus on delivering
              impactful experiences for your users. Explore my portfolio and
              discover how I can simplify your digital journey.
            </p>
          </div>

          {/* Projects Section */}
          <div>
            <h5 className="text-xl font-bold">Projects</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <ul>
              <li>
                <a
                  href="https://www.simplifyproductivity.com/"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Simplify Productivity by Dragan Ignjatovic"
                >
                  Simplify Productivity
                </a>
              </li>
              <li>
                <a
                  href="https://simplifyproblems.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Simplify Problems by Dragan Ignjatovic"
                >
                  Simplify Problems
                </a>
              </li>
              <li>
                <a
                  href="https://melissa-webshop-frontend.vercel.app"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Melissa Web-Shop by Dragan Ignjatovic"
                >
                  Melissa Web-Shop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-username/react-mini-projects"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="25 mini projects by Dragan Ignjatovic"
                >
                  25 React Mini-Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gareleon/25-react-projects"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Pomodoro APP by Dragan Ignjatovic"
                >
                  Pomodoro App
                </a>
              </li>
              <li>
                <a
                  href="https://gareleon.github.io/fCC-pomodoro-app/"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="JS Calculator by Dragan Ignjatovic"
                >
                  JS Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h5 className="text-xl font-bold">Useful Links</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <ul>
              <li>
                <a
                  href="https://web-design-tips.example.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Design Tips
                </a>
              </li>
              <li>
                <a
                  href="https://ecommerce-guide.example.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-commerce Best Practices
                </a>
              </li>
              <li>
                <a
                  href="https://website-performance.example.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website Optimization Guide
                </a>
              </li>
              <li>
                <a
                  href="https://developer-resources.example.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-xl font-bold">Contact</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <ul>
              <li>
                <a
                  href="tel:+381653317335"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  title="Dragan Ignjatovic Phone"
                >
                  +381 653317335
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@simplifyproblems.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  title="Office Email"
                >
                  office@simplifyproblems.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:dragan@simplifyproblems.com"
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Dragan Ignjatovic Email"
                >
                  dragan@simplifyproblems.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyrights Info */}
      <hr className="border-secondary w-full mt-4" />
      <div className="max-w-screen-xl py-4 text-center justify-center flex items-center mx-auto">
        <p>
          <MdCopyright className="inline-block mr-2" />
          2024{" "}
          <a href="#" className="hover:text-primary" title="Dragan Ignjatovic">
            Dragan Ignjatovic
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
