import EnterAnimation from "@/components/enter-animation";
import Header from "@/components/header";
import Faq from "@/components/sections/faq";
import Products from "@/components/sections/products";
import TestSection from "@/components/sections/test-section";
import SideMenu from "@/components/side-menu";
import PathDrawing from "@/components/svg-test";
import UseTransform from "@/components/svg-use-transform";

export default function TestPage() {
  return (
    <div className="flex">
      <SideMenu />
      <div>
        <Header />
        <EnterAnimation/>
        <UseTransform/>
        <PathDrawing/>
        <Products />
        <TestSection />
        <Faq />
      </div>
    </div>
  )
}
