import { aboutData } from "./constants/about-data";
import { contactIconData } from "./constants/contact-icon-data";
import { useState } from "react";

export function About() {
  const [showMore, setShowMore] = useState(false);

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
        <div className="flex flex-col ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-xl">
            Conheça um pouco sobre mim
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {" "}
            {showMore
              ? aboutData.text
              : `${aboutData.text.substring(0, 250)}...`}
          </p>
          <button
            className="self-end text-primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "ver menos" : "ver mais"}
          </button>
        </div>
      </div>
    </section>
  );
}
