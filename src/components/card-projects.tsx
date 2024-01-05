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
      className="max-w-96 flex flex-col gap-4 p-2 pb-4 rounded-md bg-primary-foreground border-solid
      border-foreground border-[1px] hover:border-primary transition-transform
      transform origin-center duration-700 cursor-pointer relative  hover:shadow-2xl hover:shadow-primary"
      onMouseEnter={() => setOpenModalButtons(true)}
      onMouseLeave={() => setOpenModalButtons(false)}
    >
      <img className="object-cover rounded-md" src={picture} alt="" />
      <h4 className="text-lg">Ignite Shop</h4>
      <div className="flex gap-2">
        <SiNextdotjs />
        <SiTailwindcss />
      </div>
      <div
        className={`gap-3 flex justify-between flex-wrap w-full transition-all  ${
          openModalButtons
            ? " h-24 opacity-100 duration-700"
            : " h-0 opacity-0 duration-300"
        }`}
      >
        <Button className="bg-zinc-50 w-full  text-zinc-900 border-zinc-900 border-solid border-2 duration-500 transition-all hover:bg-zinc-200 hover:shadow-xl hover:shadow-primary dark:bg-zinc-800 dark:border-zinc-50  dark:text-zinc-50  dark:hover:bg-zinc-900">
          <a href="" className="flex items-center">
            <Github />
            Acessar Github
          </a>
        </Button>
        <Button className="w-full hover:shadow-lg hover:shadow-foreground transition-all duration-500">
          <a href="" className="flex items-center">
            <Globe />
            Acessar site
          </a>
        </Button>
      </div>
    </div>
  );
}
