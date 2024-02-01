import PageButton from "@/Components/PageButton";
import { CarouselTab } from "@/Components/CarouselTab";
import NavBar from "@/Components/NavBar";

const LandingPage = () => {
  return (
    <main>
      <NavBar></NavBar>
      <CarouselTab></CarouselTab>
      <PageButton displayName="Create an Account"></PageButton>
    </main>
  )
}

export default LandingPage