import EnterAnimation from "@/components/motion/enter-animation";
import Header from "@/components/header";
import Faq from "@/components/sections/faq";
import Products from "@/components/sections/products";
import TestSection from "@/components/sections/test-section";
import SideMenu from "@/components/side-menu";
import PathDrawing from "@/components/motion/svg-test";
import UseTransform from "@/components/motion/svg-use-transform";
import PathMorphing from "@/components/motion/path-morphing";

export default function TestPage() {
  return (
    <div className="flex">
      <SideMenu />
      <div>
        <Header />
        <PathMorphing/>
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
