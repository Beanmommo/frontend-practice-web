import React from 'react'
import PageButton from "@/Components/Global/PageButton";
import { CarouselTab } from "@/Components/LandingPage/CarouselTab";
import NavBar from "@/Components/LandingPage/NavBar";

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