import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface ContactIconTypes {
  name: string;
  icon: JSX.Element;
  href: string;
}

export const contactIconData: ContactIconTypes[] = [
  {
    name: "email",
    icon: <Mail />,
    href: "mailto:eduardo.ananias2@hotmail.com",
  },
  {
    name: "github",
    icon: <Github />,
    href: "https://github.com/Du-devBR",
  },

  {
    name: "linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/eduardo-ananias-29a53048/",
  },
  {
    name: "phone",
    icon: <Phone />,
    href: "https://wa.me/5511971045077",
  },
];
