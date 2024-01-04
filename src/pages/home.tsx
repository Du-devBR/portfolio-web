import { GridContainer } from "../components/grid-container";
import { About } from "./_components/about";
import { Banner } from "./_components/banner";
import { Header } from "./_components/header";

export function Home() {
  return (
    <GridContainer>
      <Header />
      <Banner />
      <About />
    </GridContainer>
  );
}
