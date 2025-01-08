import { JSX } from "react";
import {
  SiFastapi,
  SiFirebase,
  SiGooglebigquery,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiScikitlearn,
  SiShadcnui,
  SiTableau,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandDjango,
  TbBrandNextjs,
  TbBrandSupabase,
  TbSql,
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GrHadoop } from "react-icons/gr";
import { IoBarChart } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaBootstrap,
  FaCloud,
  FaCode,
  FaCodeBranch,
  FaDatabase,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaTools,
} from "react-icons/fa";

type SkillsData = {
  title: string;
  description: Array<Record<string, string | number | JSX.Element>>;
  icon: any;
};

export const fullStackDevelopment: SkillsData[] = [
  {
    title: "Programming Languages",
    description: [
      {
        name: "JavaScript",
        progress: 50,
        icon: <SiJavascript size={25} className="text-yellow-500" />,
      },
      {
        name: "TypeScript",
        progress: 30,
        icon: <SiTypescript size={25} className="text-blue-500" />,
      },
      { name: "SQL", progress: 50, icon: <TbSql size={25} /> },
    ],
    icon: FaCode,
  },
  {
    title: "Frameworks",
    description: [
      { name: "Next.js", progress: 40, icon: <TbBrandNextjs size={25} /> },
      { name: "React", progress: 40, icon: <FaReact size={25} /> },
      { name: "Express.js", progress: 20, icon: <FaNodeJs size={25} /> },
      { name: "Tailwind", progress: 70, icon: <RiTailwindCssFill size={25} /> },
      { name: "BootStrap5", progress: 50, icon: <FaBootstrap size={25} /> },
    ],
    icon: FaCodeBranch,
  },
  {
    title: "Databases",
    description: [
      { name: "MySQL", progress: 40, icon: <SiMysql size={25} /> },
      { name: "PostgreSQL", progress: 40, icon: <SiPostgresql size={25} /> },
      { name: "MongoDB", progress: 30, icon: <SiMongodb size={25} /> },
    ],
    icon: FaDatabase,
  },
  {
    title: "Tools",
    description: [
      { name: "Git", progress: 20, icon: <FaGit size={25} /> },
      { name: "GitHub", progress: 30, icon: <FaGithub size={25} /> },
      { name: "VSCode", progress: 50, icon: <VscVscode size={25} /> },
      { name: "Postman", progress: 20, icon: <SiPostman size={25} /> },
    ],
    icon: FaTools,
  },
  {
    title: "Other",
    description: [
      { name: "ShadCN", progress: 60, icon: <SiShadcnui size={25} /> },
      { name: "Firebase", progress: 30, icon: <SiFirebase size={25} /> },
      { name: "Supabase", progress: 50, icon: <TbBrandSupabase size={25} /> },
      { name: "SASS", progress: 70, icon: <FaSass size={25} /> },
    ],
    icon: FaCloud,
  },
];

export const dataScience: SkillsData[] = [
  {
    title: "Programming Languages",
    description: [
      {
        name: "Python",
        progress: 50,
        icon: <FaPython size={25} className="text-yellow-500" />,
      },
      { name: "SQL", progress: 50, icon: <TbSql size={25} /> },
      // { name: "Bash", progress: 20, icon: <SiGnubash size={25} /> },
      // { name: "R", progress: 50, icon: <TbSql size={25} /> },
      // { name: "Julia", progress: 20, icon: <TbSql size={25} /> },
    ],
    icon: FaCode,
  },
  {
    title: "Frameworks",
    description: [
      { name: "Pandas", progress: 40, icon: <SiPandas size={25} /> },
      { name: "NumPy", progress: 30, icon: <SiNumpy size={25} /> },
      { name: "Scikit", progress: 25, icon: <SiScikitlearn size={25} /> },
      { name: "Django", progress: 10, icon: <TbBrandDjango size={25} /> },
    ],
    icon: FaCodeBranch,
  },
  {
    title: "Databases",
    description: [
      { name: "Hadoop", progress: 10, icon: <GrHadoop size={25} /> },
      {
        name: "BigQuery",
        progress: 10,
        icon: <SiGooglebigquery size={25} />,
      },
    ],
    icon: FaDatabase,
  },
  {
    title: "Tools",
    description: [
      { name: "Jupyter Notebook", progress: 50, icon: <SiJupyter size={25} /> },
      { name: "GitHub", progress: 30, icon: <FaGithub size={25} /> },
    ],
    icon: FaTools,
  },
  {
    title: "Other",
    description: [
      { name: "Power BI", progress: 10, icon: <IoBarChart size={25} /> },
      { name: "Tableau", progress: 10, icon: <SiTableau size={25} /> },
      { name: "FastAPI", progress: 10, icon: <SiFastapi size={25} /> },
    ],
    icon: FaCloud,
  },
];
