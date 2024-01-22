import { Button } from "@/components/ui/button";
import { technologyIcons } from "./constants/technology-icon-data";
import banner from "@/assets/banner.webp";
import curriculo from "@/assets/Currículo - Eduardo Ananias da Silva.pdf";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { motion } from "framer-motion";

export function Banner() {
  return (
    <main className="flex gap-16 items-center mt-40 max-md:mt-24 max-md:flex-col">
      <div className="text-foreground max-w-[591px] flex flex-col gap-6">
        <span className="text-3xl max-sm:text-2xl">Olá, seja bem vindo!</span>
        <h1 className="text-5xl max-sm:text-3xl">
          Eu sou <strong className="text-primary">Eduardo Ananias</strong>,
          ajudo você a tirar sua ideia do papel.
        </h1>
        <p className="text-base">
          Engenheiro apaixonado por desenvolvimento de Software, utilizando
          tecnologias inovadoras para construir aplicações com qualidade.
        </p>
        <div className="flex gap-4 w-full overflow-hidden ">
          {technologyIcons.map((item, index) => (
            <div className="text-3xl bg-zinc-600 contents" key={index}>
              {item.technology}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <Button
            type="button"
            className="bg-zinc-50 text-zinc-900 border-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-50 border-solid border-2 dark:text-zinc-50  dark:hover:bg-zinc-900"
          >
            <a href="#projects">Veja meus projetos</a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Meu currículo</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col w-[124px] gap-2 ">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:text-primary duration-500">
                <a href={curriculo} target="_blank">
                  Visualizar
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:text-primary duration-500">
                <a href={curriculo} target="_blank" download={curriculo}>
                  Baixar
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <motion.div
        className="flex items-center bg-primary md:w-full overflow-hidden pt-6 px-6 rounded-3xl max-lg:rotate-0"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="object-contain transform max-h-[585px] max-sm:h-[400px] "
          src={banner}
          alt=""
          loading="lazy"
        />
      </motion.div>
    </main>
  );
}
