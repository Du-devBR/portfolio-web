import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import { ProjectsDataTypes } from "@/pages/_components/constants/projects-data";

interface CardProjectsProps {
  data: ProjectsDataTypes;
}

export function CardProjects({ data }: CardProjectsProps) {
  return (
    <div
      className="max-w-96 flex flex-col gap-4 p-2  rounded-md bg-primary-foreground border-solid
      border-foreground border-[1px] hover:border-primary duration-700 cursor-pointer relative  hover:shadow-2xl hover:shadow-primary"
    >
      <img
        className="object-cover rounded-md min-h-[268px]"
        src={data.cover_image}
        alt=""
      />
      <h3 className="text-lg">{data.name}</h3>
      <div className="flex gap-2">
        {data.lenguages.map((lenguage, index) => (
          <div key={index}>{lenguage}</div>
        ))}
      </div>
      <div className={`gap-3 flex justify-between flex-wrap w-full}`}>
        <Button className="bg-zinc-50 w-full  text-zinc-900 border-zinc-900 border-solid border-2 duration-500 transition-all hover:bg-zinc-200 hover:shadow-xl hover:shadow-primary dark:bg-zinc-800 dark:border-zinc-50  dark:text-zinc-50  dark:hover:bg-zinc-900">
          <a
            target="_blanck"
            href={data.github_repo}
            className="flex items-center"
          >
            <Github />
            Acessar Github
          </a>
        </Button>
        <Button className="w-full hover:shadow-lg hover:shadow-foreground transition-all duration-500">
          <a
            target="_blanck"
            href={data.homepage}
            className="flex items-center"
          >
            <Globe />
            Acessar site
          </a>
        </Button>
      </div>
    </div>
  );
}
