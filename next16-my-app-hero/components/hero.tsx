
export function Hero() {
  return (
    <div className="grid grid-cols-6 grid-rows-7 w-full min-h-[calc(100vh-4rem)] bg-cover bg-top-left bg-[url('/images/bokhon.jpg')]" >
      <div className="row-start-2 row-end-6 col-start-2 col-span-5 flex justify-end">
        <img src="/globe.svg" className="h-[calc((100vh-4rem)*4/6)] object-cover" alt="test" />
      </div>
      <div className="bg-linear-to-r from-transparent to-white row-start-1 row-span-7 col-start-1 col-span-6"></div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-3">
        <p className="text-clamp text-blue-500 px-4">توجه</p>
      </div>
      <div className="row-start-4 row-end-7 col-start-1 col-end-3">
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
        <p className="px-4 text-zinc-600 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, alias. Fugiat laborum facere aliquid laboriosam tenetur qui corrupti! Neque iste facere odio ratione autem qui eaque ab cum assumenda consectetur!</p>
      </div>
    </div>
  )
}

