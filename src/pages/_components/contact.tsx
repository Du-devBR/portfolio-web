import { contactIconData } from "./constants/contact-icon-data";

export function Contact() {
  return (
    <section className="flex flex-col mt-40 max-md:mt-24">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Contato
      </h2>
      <cite className="leading-7 [&:not(:first-child)]:mt-6 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
        blanditiis! Quis nesciunt praesentium ea neque est, itaque esse
        cupiditate ipsum.
      </cite>
      <div className="">
        {contactIconData.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.icon}
            <a href={item.href} target="_blanck">
              {item.href}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
