import LayoutAnchor from "@/components/motion/layout-anchor";
import LayoutAnimation from "@/components/motion/layout-animation";
import Reordering from "@/components/motion/reordering";
import ScrollContainer from "@/components/motion/scroll-container";
import SharedLayoutAnimation from "@/components/motion/shared-layout-animation";

export default function page() {
  return (
    <div className="grid place-content-center">
      <LayoutAnimation />
      <Reordering />
      <SharedLayoutAnimation />
      <LayoutAnchor />
      <ScrollContainer />
    </div>
  )
}
