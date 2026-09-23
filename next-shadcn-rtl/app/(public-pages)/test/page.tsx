import Header from "@/components/header";
import Faq from "@/components/sections/faq";
import Products from "@/components/sections/products";
import SideMenu from "@/components/side-menu";

export default function TestPage() {
  return (
    <div className="flex">
      <SideMenu />
      <div>
        <Header />
        <Products />
        <Faq />
      </div>
    </div>
  )
}
