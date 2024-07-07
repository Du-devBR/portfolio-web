// import { randomUUID } from "node:crypto";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import dailydiet from "@/assets/dailydiet.jpg";
import myFreela from "@/assets/myFreela.jpg";
import coffeDelivery from "@/assets/coofeDelivery.jpg";
import gitCard from "@/assets/gitCard.jpg";
import bikcraft from "@/assets/bikcraft.jpg";
import igniteShop from "@/assets/igniteShop.jpg";
import lacrei from "@/assets/lacrei.png";

import {
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiSass,
  SiStyledcomponents,
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
    cover_image: igniteShop,
    name: "Ignite Shop",
    lenguages: [
      <SiNextdotjs />,
      <SiStyledcomponents />,
      <SiTypescript />,
      <FaStripe />,
      <SiVercel />,
    ],
    github_repo: "https://github.com/Du-devBR/rocketDesafioIgniteShop",
    homepage: "https://desafio-ignite-shop.vercel.app/",
  },
  {
    id: "3",
    cover_image: myFreela,
    name: "Meu Freela",
    lenguages: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaGithub />],
    github_repo: "https://github.com/Du-devBR/dev-hall-front-end-1",
    homepage: "https://du-devbr.github.io/dev-hall-front-end-1/",
  },

  {
    id: "4",
    cover_image: coffeDelivery,
    name: "Coffe Delivery",
    lenguages: [
      <FaReact />,
      <SiTypescript />,
      <SiStyledcomponents />,
      <SiVercel />,
    ],
    github_repo:
      "https://github.com/Du-devBR/rocketseatDesafio-Coffee-delivery/tree/master/coffeeDelivery",
    homepage: "https://rocketseat-coffee-delivery.vercel.app/",
  },
  {
    id: "5",
    cover_image: gitCard,
    name: "Meu Freela",
    lenguages: [<FaReact />, <SiSass />, <FaGithub />],
    github_repo: "https://github.com/Du-devBR/github-card",
    homepage: "https://du-devbr.github.io/github-card/",
  },
  {
    id: "6",
    cover_image: bikcraft,
    name: "BikCraft",
    lenguages: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaGithub />],
    github_repo: "https://github.com/Du-devBR/projetoOrigamid",
    homepage: "https://du-devbr.github.io/projetoOrigamid/index.html",
  },
  {
    id: "7",
    cover_image: lacrei,
    name: "Lacrei Saude infos",
    lenguages: [
      <SiNextdotjs />,
      <SiTypescript />,
      <SiStyledcomponents />,
      <SiVercel />,
    ],
    github_repo: "https://github.com/Du-devBR/frontend-lacrei-saude",
    homepage: "https://frontend-lacrei-saude.vercel.app/",
  },
];
