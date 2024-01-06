import { v4 as uuidv4 } from "uuid";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface ContactIconTypes {
  id: string;
  name: string;
  icon: JSX.Element;
  href: string;
}

export const contactIconData: ContactIconTypes[] = [
  {
    id: uuidv4(),
    name: "eduardo.ananias2@hotmail.com",
    icon: <Mail />,
    href: "mailto:eduardo.ananias2@hotmail.com",
  },
  {
    id: uuidv4(),
    name: "github.com/Du-devBR",
    icon: <Github />,
    href: "https://github.com/Du-devBR",
  },

  {
    id: uuidv4(),
    name: "linkedin.com/in/eduardo-ananias-29a53048",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/eduardo-ananias-29a53048/",
  },
  {
    id: uuidv4(),
    name: "+55 (11) 97104-5077",
    icon: <Phone />,
    href: "https://wa.me/5511971045077",
  },
];
