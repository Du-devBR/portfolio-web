import { GridContainerColumns } from "@/components/grid-conatiner-columns";
import { technologyIcons } from "./constants/technology-icon-data";
import { CardTechnology } from "@/components/card-technologys";

export function Skills() {
  return (
    <section className="flex flex-col mt-40 max-md:mt-24">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Habilidades
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Busco constantemente aprimorar minhas habilidades em programação,
        participando de formações especializadas para enfrentar os desafios
        diários. Contribuindo de maneira eficaz em projetos inovadores.
      </p>
      <GridContainerColumns>
        {technologyIcons.map((item, index) => (
          <CardTechnology key={index} data={item} />
        ))}
      </GridContainerColumns>
    </section>
  );
}
