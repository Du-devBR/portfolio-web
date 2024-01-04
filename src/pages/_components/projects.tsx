import { CardProjects } from "@/components/card-projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Projects() {
  return (
    <section className="flex flex-col mt-40 max-md:mt-24">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Projetos
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Carousel
        className="w-full "
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-4/5">
            <div className="relative py-10">
              <CardProjects />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-4/5">
            <div className="relative py-10">
              <CardProjects />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-4/5">
            <div className="relative py-10">
              <CardProjects />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 max-md:basis-1/2 max-sm:basis-4/5">
            <div className="relative py-10">
              <CardProjects />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
