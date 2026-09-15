"use client";

import { useEffect, useState } from "react";


type Props = {
  bgImages: string[]
}

export function Hero({bgImages}: Props) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % bgImages.length);
    }, 5000);

    return () => {
      clearInterval(t)
    }
  }, []);

  const bg = {
    backgroundImage: `url(${bgImages[currentImage]})`
  }


  return (
    <section style={bg} className="w-full min-h-[calc(100vh-4rem)] grid grid-cols-6 grid-rows-7 bg-cover bg-top-left" >
      {/* <div className="row-start-2 row-end-6 col-start-2 col-span-5 flex justify-end">
        <img src="/globe.svg" className="h-[calc((100vh-4rem)*4/6)] object-cover" alt="test" />
      </div> */}
      <div className="bg-linear-to-r from-transparent to-white row-start-1 row-span-7 col-start-1 col-span-6"></div>
      <div className="row-start-2 row-end-3 col-start-1 col-end-3">
        <p className="text-clamp text-blue-500 px-4">شماره تصویر{currentImage}</p>
      </div>
      <div className="row-start-3 row-end-5 col-start-1 col-end-4 ">
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
      </div>
    </section>
  )
}

