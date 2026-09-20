import SectionTitle from "./section-title";

export default function Newsletter() {
  return (
    <section id="news_letter" className="min-h-svh flex flex-col items-center justify-center  bg-white dark:bg-gray-800">
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
    </section>
  );
}
