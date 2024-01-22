import { Check, Copy } from "lucide-react";
import { contactIconData } from "./constants/contact-icon-data";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function Contact() {
  const { copyLinkContact, handleCopyLinkContact, setCopyLinkContact } =
    useCopyToClipboard();
  return (
    <section id="contact" className="flex flex-col mt-40 max-md:mt-24">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Contato
      </h2>
      <cite className="leading-7 [&:not(:first-child)]:mt-6 text-center">
        "Fique à vontade para entrar em contato comigo através dos canais de
        atendimento que estão abaixo. Ficarei feliz em te ajudar."
      </cite>
      <div className="grid grid-cols-2 mt-6 gap-6 max-md:grid-cols-1">
        {contactIconData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-full">{item.icon}</div>
            <a
              href={item.href}
              target="_blanck"
              id="linkContact"
              className="text-sm"
            >
              {item.name}
            </a>
            {copyLinkContact === item.id ? (
              <div
                className="flex items-center cursor-pointer github.com/Du-devBR "
                onClick={() => setCopyLinkContact("0")}
              >
                <Check className="text-primary w-4 animate-copy" />
                <span className="text-primary text-xs animate-pulse">
                  copiado
                </span>
              </div>
            ) : (
              <Copy
                className="cursor-pointer w-4"
                onClick={() => handleCopyLinkContact(item.name, item.id)}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
