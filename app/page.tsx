import { CarouselTab } from "@/Components/LandingPage/CarouselTab";
import NavBar from "@/Components/LandingPage/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <CarouselTab></CarouselTab>
      <button>Create an account</button>

    </main>
  );
}
