import { ColorDemo } from "@/components/color-demo";
import { DateBasic } from "@/components/date-demo";
import { CustomStyles } from "@/components/form";

export default function Home() {
  return (
    <section className="flex flex-1 w-full max-w-3xl flex-col items-center gap-4 py-8 bg-white dark:bg-black sm:items-start">
      <CustomStyles />
      <DateBasic />
      <ColorDemo />
    </section>
  );
}
