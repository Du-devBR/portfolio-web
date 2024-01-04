import {
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

interface TechnologisTypes {
  technology: JSX.Element;
}

export const technologyIcons: TechnologisTypes[] = [
  {
    technology: <FaReact />,
  },

  {
    technology: <FaHtml5 />,
  },
  {
    technology: <SiTailwindcss />,
  },
  {
    technology: <SiJavascript />,
  },
  {
    technology: <FaJava />,
  },
  {
    technology: <FaNodeJs />,
  },
  {
    technology: <FaDocker />,
  },
  {
    technology: <FaGithub />,
  },
];
