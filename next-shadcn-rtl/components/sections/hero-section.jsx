'use client';

import { ArrowLeftIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
    const installCommand = 'npm install prebuiltui@latest';
    const [isCopied, setIsCopied] = useState(false);

    const logos = [
        '/companies-logo/instagram.svg',
        '/companies-logo/framer.svg',
        '/companies-logo/microsoft.svg',
        '/companies-logo/huawei.svg',
        '/companies-logo/walmart.svg',
    ]

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(installCommand);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }

    return (
        <section className="flex flex-col items-center justify-center relative h-svh overflow-hidden">

            <h1
                className="text-2xl md:text-4xl/18 text-center font-semibold max-w-2xl bg-gradient-to-r from-black dark:from-[#1359c9] to-[#748298] dark:to-white text-transparent bg-clip-text">
                ساخت و برپایی رابط کاربری از پیش ساخته
            </h1>
            <p className="text-slate-600 dark:text-slate-100 md:text-base max-md:px-2 text-center max-w-lg mt-3">
                یک بانک اطلاعاتی بدون سرور پستگرس که به شما کمک می کند سریع و مقیاس پذیر بدون محدودیت نرم افزار تولید کنید
            </p>

            <button
                className="flex items-center gap-2 btn hover:opacity-90 text-white px-8 py-3 mt-8 rounded-full transition">
                <span>شروع به کار مجانی</span>
                <ArrowLeftIcon className='size-5' />
            </button>

            <div className="text-gray-400 dark:text-gray-800 bg-linear-to-b from-indigo-600/50 to-gray-300/50 p-px rounded-[7px] mt-8">
                <div className="flex items-center gap-2 bg-white rounded-md px-4 py-3">
                    $ <span>{installCommand}</span>
                    <button onClick={handleCopy} className="cursor-pointer ml-2">
                        {isCopied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
                    </button>
                </div>
            </div>
            <p className="py-6 text-slate-600 dark:text-slate-200 mt-14">مورد تائید برندهای معتبر </p>

            <div className="flex flex-wrap justify-around max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4" id="logo-container">
                {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-7 w-auto max-w-xs" />)}
            </div>
        </section >
    );
}