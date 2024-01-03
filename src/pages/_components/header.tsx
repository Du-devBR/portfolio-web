import logo from "@/assets/logo.svg";
import { ThemeToggle } from "@/components/theme/theme-toggle";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex gap-4">
        <div>
          <ThemeToggle />
        </div>
        <Button
          type="button"
          className="bg-zinc-50 border-zinc-800 border-solid border-2 text-zinc-800 dark:border-none hover:bg-zinc-200"
        >
          <a href="#">Sobre</a>
        </Button>
        <Button type="button">
          <a href="#">Contato</a>
        </Button>
      </div>
    </header>
  );
}
