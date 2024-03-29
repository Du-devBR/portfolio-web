import logo from "@/assets/logo.svg";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="flex flex-col mt-40 max-md:mt-24 bg-zinc-200 dark:bg-zinc-800  absolute top-auto w-full left-0 text-center py-8 border-b-primary border-b-4">
      <div className="flex w-full items-center justify-center gap-2 relative max-sm:gap-4 max-sm:flex-col ">
        <img src={logo} alt="" className="w-8 " />
        <div className="flex items-center">
          <span className="max-sm:text-sm">{new Date().getFullYear()} - </span>
          <p className="max-sm:text-sm underline font-bold">
            Eduardo Ananias - Design by{" "}
            <a
              href="https://www.linkedin.com/in/eduardo-ananias-29a53048/"
              className="text-muted-foreground "
            >
              Eduardo Ananias
            </a>
          </p>
        </div>
        <button
          aria-label="ir ao topo"
          className=" absolute top-[-48px] right-8"
          onClick={scrollTo}
        >
          <ArrowUp
            aria-hidden="true"
            className="text-primary w-8 h-8 animate-pulse"
          />
        </button>
      </div>
    </footer>
  );
}
