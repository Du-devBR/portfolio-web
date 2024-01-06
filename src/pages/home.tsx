import { GridContainer } from "../components/grid-container";
import { About } from "./_components/about";
import { Banner } from "./_components/banner";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
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
      <Contact />
      <Footer />
    </GridContainer>
  );
}
