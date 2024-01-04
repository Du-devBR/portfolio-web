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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </p>
      <GridContainerColumns>
        {technologyIcons.map((item, index) => (
          <CardTechnology key={index} data={item} />
        ))}
      </GridContainerColumns>
    </section>
  );
}
