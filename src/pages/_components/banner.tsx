import { Button } from "@/components/ui/button";
import { technologyIcons } from "./constants/technology-icon-data";

export function Banner() {
  return (
    <main className="flex gap-16 mt-40 max-md:flex-col">
      <div className="text-foreground max-w-[591px] flex flex-col gap-6">
        <span className="text-3xl">Ola, seja bem vindo!</span>
        <h1 className="text-5xl">
          Eu sou <strong className="text-primary">Eduardo Ananias</strong>,
          ajudo você a tirar sua ideia do papel.
        </h1>
        <p className="text-base">
          Engenheiro Apaixonado por Desenvolvimento de Software, utilizando
          Tecnologias Inovadoras para Construir Aplicações com Qualidade.
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
            <a href="#">Veja meus projetos</a>
          </Button>
          <Button type="button">Baixar Curriculo</Button>
        </div>
      </div>
      <div className="w-full h-2 bg-red-300"></div>
    </main>
  );
}
