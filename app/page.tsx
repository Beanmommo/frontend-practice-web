
import Content from "@/pages/Content";
import FeaturesPage from "@/pages/FeaturesPage";
import LandingPage from "@/pages/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LandingPage></LandingPage>
      <Content></Content>
      <FeaturesPage></FeaturesPage>
    </main>
  );
}
