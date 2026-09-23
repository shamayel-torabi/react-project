"use client";

import { ArrowLeftIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function HeroSection() {
  const installCommand = "npm install prebuiltui@latest";
  const [isCopied, setIsCopied] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const logos = [
    "/companies-logo/instagram.svg",
    "/companies-logo/framer.svg",
    "/companies-logo/microsoft.svg",
    "/companies-logo/huawei.svg",
    "/companies-logo/walmart.svg",
  ];

  const bgImages = [
    "/assets/images/IMG_01.jpeg",
    "/assets/images/IMG_02.jpeg",
    "/assets/images/IMG_03.jpeg",
    "/assets/images/IMG_04.jpeg",
    "/assets/images/IMG_05.jpeg",
    "/assets/images/IMG_06.jpeg",
  ];

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(installCommand);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const bg = {
    backgroundImage: `url(${bgImages[currentImage]})`,
  };


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} id="home">
      <div style={bg} className="h-svh flex flex-col items-center justify-center relative overflow-hidde bg-linear-to-r from-[#0601fa] to-[#05e2f1]  bg-cover bg-top-left">
        <h1 className="text-clamp text-center font-semibold max-w-7xl bg-linear-to-r from-[#0601fa] to-[#05e2f1] text-transparent bg-clip-text">
          ساخت و برپایی رابط کاربری از پیش ساخته
        </h1>
        <p className="text-slate-600 dark:text-slate-100 md:text-base max-md:px-2 text-center max-w-lg mt-3">
          یک بانک اطلاعاتی بدون سرور پستگرس که به شما کمک می کند سریع و مقیاس پذیر بدون محدودیت نرم افزار تولید کنید
        </p>

        <button className="flex items-center gap-2 btn hover:opacity-90 text-white px-8 py-3 mt-8 rounded-full transition">
          <span>شروع به کار مجانی</span>
          <ArrowLeftIcon className="size-5" />
        </button>

        <div className="text-gray-800 dark:text-gray-200 bg-linear-to-b from-indigo-600/50 to-gray-300/50 p-px rounded-[7px] mt-8">
          <div className="flex items-center gap-2 rounded-md px-4 py-3">
            <button onClick={handleCopy} className="cursor-pointer ml-2">
              {isCopied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
            </button>
            <span>{installCommand}</span> $
          </div>
        </div>
        <p className="py-6 text-slate-600 dark:text-slate-200 mt-14">مورد تائید برندهای معتبر </p>

        <div className="flex flex-wrap justify-around max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4" id="logo-container">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="h-7 w-auto max-w-xs" />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
