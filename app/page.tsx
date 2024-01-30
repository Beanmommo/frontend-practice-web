import PageButton from "@/Components/Global/PageButton";
import { CarouselTab } from "@/Components/LandingPage/CarouselTab";
import NavBar from "@/Components/LandingPage/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <CarouselTab></CarouselTab>
      <PageButton displayName="Create an Account"></PageButton>

    </main>
  );
}
