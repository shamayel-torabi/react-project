"use client";
import SectionTitle from "./section-title";
import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <motion.section initial={{ scale: 0 }}  whileInView={{ scale: 1 }} transition={{ ease: "easeOut", duration: 1 }}  id="news_letter" className="min-h-svh flex flex-col items-center justify-center  bg-section-background">
      <SectionTitle title="دریافت خبرنامه" subtitle="خبرنامه به ایمیل شما ارسال خواهد شد." />
      <div className="flex flex-col items-center justify-center" style={{direction: 'ltr'}}>
        <div className="flex bg-slate-100 text-sm p-1 rounded-full w-full m-10 border-2 border-white ring ring-slate-200">
          <input className="flex-1 rounded-full pl-5 p-3 outline-none text-black" type="email" placeholder="رایانامه خود را وارد کنید" />
          <button className="font-medium hidden md:block btn text-black px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition">
            به روز رسانی
          </button>
        </div>
        <button className="font-medium md:hidden btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition">به روز رسانی</button>
      </div>
    </motion.section>
  );
}
