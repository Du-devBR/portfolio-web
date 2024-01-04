import { GridContainer } from "../components/grid-container";
import { About } from "./_components/about";
import { Banner } from "./_components/banner";
import { Header } from "./_components/header";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export function Home() {
  return (
    <GridContainer>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </GridContainer>
  );
}
