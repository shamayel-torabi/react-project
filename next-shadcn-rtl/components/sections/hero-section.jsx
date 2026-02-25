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
            <svg className="absolute inset-0 -z-10" width="1440" height="1018" viewBox="0 0 1440 1018" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#a)">
                    <ellipse cx="271.282" cy="200.379" rx="271.282" ry="200.379" fill="#FBFFE1" />
                </g>
                <g filter="url(#b)">
                    <ellipse cx="993.487" cy="451.53" rx="359.487" ry="265.53" fill="url(#c)" fillOpacity=".1" />
                </g>
                <defs>
                    <filter id="a" x="-300" y="-300" width="1142.56" height="1000.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_8119_961" />
                    </filter>
                    <filter id="b" x="333.9" y="-114.1" width="1319.18" height="1131.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150.05" result="effect1_foregroundBlur_8119_961" />
                        <feTurbulence type="fractalNoise" baseFrequency="inf inf" stitchTiles="stitch" numOctaves="3" result="noise" seed="9943" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="effect1_foregroundBlur_8119_961" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect2_noise_8119_961">
                            <feMergeNode in="effect1_foregroundBlur_8119_961" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                    <linearGradient id="c" x1="550.41" y1="500.394" x2="1343.15" y2="82.986" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F6DFF4" />
                        <stop offset=".196" stopColor="#FF6E00" />
                        <stop offset=".407" stopColor="#F8C04D" />
                        <stop offset=".586" stopColor="#EF3EC2" />
                        <stop offset=".816" stopColor="#4700EC" />
                        <stop offset=".949" stopColor="#5100BA" />
                    </linearGradient>
                </defs>
            </svg>

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

            <div className="text-gray-400 bg-gradient-to-b from-indigo-600/50 to-gray-300/50 p-px rounded-[7px] mt-8">
                <div className="flex items-center gap-2 bg-white rounded-md px-4 py-3">
                    $ <span>{installCommand}</span>
                    <button onClick={handleCopy} className="cursor-pointer ml-2">
                        {isCopied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
                    </button>
                </div>
            </div>
            <p className="py-6 text-slate-600 mt-14">مورد تائید برندهای معتبر </p>

            <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4" id="logo-container">
                {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-7 w-auto max-w-xs" />)}
            </div>
        </section >
    );
}