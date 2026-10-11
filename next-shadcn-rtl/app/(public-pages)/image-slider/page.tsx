import { ImageSlider } from "@/components/velora/image-slider";

const images = [
  { src: "/assets/images/IMG_01.jpeg", alt: "" },
  { src: "/assets/images/IMG_02.jpeg", alt: "" },
  { src: "/assets/images/IMG_03.jpeg", alt: "" },
  { src: "/assets/images/IMG_04.jpeg", alt: "" },
  { src: "/assets/images/IMG_05.jpeg", alt: "" },
  { src: "/assets/images/IMG_06.jpeg", alt: "" },
];

export default function ImageSliderHeroDemo() {
  return (
    <ImageSlider
      images={images}
      interval={6000}
      label="Featured homes"
      className="h-[calc(100vh-4rem)] "
    >
      <div className="flex h-full flex-col items-center justify-center bg-radial from-black/40 to-transparent to-70% px-16 pb-10 text-center">
        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
          مجموعه ای از تصاویر زیبای بخون
        </span>
        <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
         بهشت را خانه ای از نور تجربه کنید
        </h2>
        <p className="mt-4 max-w-md text-sm text-pretty text-white/80 sm:text-base">
          خانه هایی با معماری سنتی و مدرن, و پنجره هایی رو به باغهای چهار فصل زیبای بخون .
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#listings"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            کاوش در فهرست عکسها
          </a>
          <a
            href="#tour"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium backdrop-blur hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            گردش بخون را در برنامه خود بگنجانید
          </a>
        </div>
      </div>
    </ImageSlider>
  );
}