import picture from "@/assets/igniteShop.png";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import { useState } from "react";

export function CardProjects() {
  const [openModalButtons, setOpenModalButtons] = useState(false);

  console.log(openModalButtons);

  return (
    <div
      className="max-w-96 flex flex-col gap-4 p-2 pb-4 rounded-md bg-primary-foreground transition-transform
      transform origin-center duration-500 cursor-pointer relative hover:scale-y-105 hover:shadow-sm hover:shadow-primary"
      onMouseEnter={() => setOpenModalButtons(true)}
      onMouseLeave={() => setOpenModalButtons(false)}
    >
      <img className="object-cover" src={picture} alt="" />
      <h4 className="text-lg">Ignite Shop</h4>
      <div className="flex gap-2">
        <SiNextdotjs />
        <SiTailwindcss />
      </div>
      <div
        className={`gap-3 overflow-hidden flex  w-full transition-all duration-500 ${
          openModalButtons ? " h-12 opacity-100" : " h-0 opacity-0 "
        }`}
      >
        <Button className="bg-zinc-50  text-zinc-900 border-zinc-900 border-solid border-2 hover:bg-zinc-200 hover:shadow-xl hover:shadow-primary dark:bg-zinc-800 dark:border-zinc-50  dark:text-zinc-50  dark:hover:bg-zinc-900">
          <a href="" className="flex items-center">
            <Github />
            Acessar Github
          </a>
        </Button>
        <Button className="">
          <a href="" className="flex items-center">
            <Globe />
            Acessar site
          </a>
        </Button>
      </div>
    </div>
  );
}
