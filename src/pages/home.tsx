import { GridContainer } from "../components/grid-container";
import { Banner } from "./_components/banner";
import { Header } from "./_components/header";

export function Home() {
  return (
    <GridContainer>
      <Header />
      <Banner />
    </GridContainer>
  );
}
