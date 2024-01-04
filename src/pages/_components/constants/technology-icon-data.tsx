import {
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export interface TechnologisTypes {
  name: string;
  technology: JSX.Element;
  description: string;
  link: string;
}

export const technologyIcons: TechnologisTypes[] = [
  {
    name: "React JS",
    technology: <FaReact />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://react.dev/",
  },

  {
    name: "Html 5",
    technology: <FaHtml5 />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "TailwindCss",
    technology: <SiTailwindcss />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Javascript",
    technology: <SiJavascript />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Java",
    technology: <FaJava />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://docs.oracle.com/en/java/",
  },
  {
    name: "Node JS",
    technology: <FaNodeJs />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://nodejs.org/en",
  },
  {
    name: "Docker",
    technology: <FaDocker />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://docs.docker.com/",
  },
  {
    name: "Github",
    technology: <FaGithub />,
    description: "Server e Client Components. Uso de Hooks.",
    link: "https://docs.github.com/pt",
  },
];
