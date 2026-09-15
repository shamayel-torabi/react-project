import { Details } from "@/components/details";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products/index";


export default function Home() {
  const bgImages: string[] = [
    "/images/bokhon.jpg",
    "/images/IMG_01.jpeg",
    "/images/IMG_02.jpeg",
    "/images/IMG_03.jpeg",
    "/images/IMG_04.jpeg",
    "/images/IMG_05.jpeg",
    "/images/IMG_06.jpeg",
  ];
  
  return (
    <>
      <Hero bgImages={bgImages} />
      <Products/>
      <Details/>
    </>
  );
}
