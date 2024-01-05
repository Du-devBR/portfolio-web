// import { randomUUID } from "node:crypto";
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import dailydiet from "@/assets/dailydiet.jpg";
import myFreela from "@/assets/myFreela.jpg";
import {
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export interface ProjectsDataTypes {
  id: string;
  cover_image: string;
  name: string;
  lenguages: JSX.Element[];
  github_repo: string;
  homepage: string;
}

export const projectData: ProjectsDataTypes[] = [
  {
    id: "1",
    cover_image: dailydiet,
    name: "Daily diet Web",
    lenguages: [
      <FaReact />,
      <SiTailwindcss />,
      <SiTypescript />,
      <FaNodeJs />,
      <SiPostgresql />,
      <SiVercel />,
    ],
    github_repo: "https://github.com/Du-devBR/daily-diet-web",
    homepage: "https://daily-diet-web.vercel.app/",
  },
  {
    id: "2",
    cover_image: myFreela,
    name: "Meu Freela",
    lenguages: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaGithub />],
    github_repo: "https://github.com/Du-devBR/dev-hall-front-end-1",
    homepage: "https://du-devbr.github.io/dev-hall-front-end-1/",
  },

  // alterar abaixo

  {
    id: "1",
    cover_image: dailydiet,
    name: "Daily diet Web",
    lenguages: [
      <FaReact />,
      <SiTailwindcss />,
      <SiTypescript />,
      <FaNodeJs />,
      <SiPostgresql />,
      <SiVercel />,
    ],
    github_repo: "https://github.com/Du-devBR/daily-diet-web",
    homepage: "https://daily-diet-web.vercel.app/",
  },
  {
    id: "2",
    cover_image: myFreela,
    name: "Meu Freela",
    lenguages: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaGithub />],
    github_repo: "https://github.com/Du-devBR/dev-hall-front-end-1",
    homepage: "https://du-devbr.github.io/dev-hall-front-end-1/",
  },
];
