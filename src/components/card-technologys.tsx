import { TechnologisTypes } from "@/pages/_components/constants/technology-icon-data";

interface CardTechnologyProps {
  data: TechnologisTypes;
}

export function CardTechnology({ data }: CardTechnologyProps) {
  return (
    <a
      href={data.link}
      target="_blanck"
      className="flex flex-col gap-2 p-6 border-solid border-foreground border-[1px] rounded-lg duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary focus:border-primary"
    >
      <div className="text-4xl">{data.technology}</div>
      <strong className="text-base">{data.name}</strong>
      <p className="text-sm">{data.description}</p>
    </a>
  );
}
