import { CalculateAge } from "@/lib/calculate-age";
import { contactIconData } from "./constants/contact-icon-data";

export function About() {
  return (
    <section id="about" className="flex flex-col mt-40 max-md:mt-24">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 max-sm:text-2xl">
        Sobre
      </h2>
      <div className="flex justify-between items-start gap-16 mt-6 max-md:flex-col">
        <div className="w-full flex flex-col items-center justify-center">
          <img
            className="rounded-3xl max-w-52 border-solid border-4 border-primary"
            src="https://avatars.githubusercontent.com/u/89052479?v=4"
            alt=""
          />
          <span className="text-base mt-6">Eduardo Ananias</span>
          <ul className=" flex gap-4 mt-2">
            {contactIconData.map((item, index) => (
              <li key={index} className="hover:scale-105 hover:text-primary">
                <a
                  target="_blanck"
                  href={item.href}
                  className="shadow-2xl shadow-primary duration-500"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col max-sm:text-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-xl">
            Conheça um pouco sobre mim
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {`Eu sou Eduardo e tenho ${CalculateAge(
              new Date(1992, 10, 19)
            )} anos e sou apaixonado por tecnologia e inovação. Sou formado em Engenharia de Computadores pela Universidade Cidade de São Paulo,
            com especialização em desenvolvimento de softwares. Ao longo dos meus 9 anos de experiência na área de telecomunicações, desenvolvi
            habilidades cruciais para atender, compreender e solucionar problemas e desafios. Minha dedicação à qualidade, agilidade e
            comprometimento com os clientes sempre foi a minha prioridade.Recentemente, fiz a migração para a área de Tecnologia da Informação (TI)
            com o objetivo de auxiliar pessoas a transformar ideias em negócios e projetos em soluções. Acredito que a tecnologia é uma ferramenta
            poderosa para impulsionar o crescimento e a inovação em diversas áreas.lém disso, minha paixão pela tecnologia se estende à minha
            vida pessoal, onde busco integrar a inovação no meu cotidiano. Valorizo a comunicação eficaz e prezo pela importância da família em minha
            jornada. Sou movido pela busca constante de conhecimento e pela vontade de contribuir para o sucesso e prosperidade daqueles ao meu redor. `}
          </p>
        </div>
      </div>
    </section>
  );
}
