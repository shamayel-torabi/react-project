import { ProductComponent } from "./product";

type productItem = {
    title: string;
    detail: string;

}
const products: productItem[] = [
    {
        title: "محصول 1",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, iste quidem. Nesciunt sequi repellat hic provident, iusto incidunt ab animi deserunt, itaque debitis vel cum necessitatibus dolor maxime doloribus veritatis"
    },
    {
        title: "محصول 2",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, iste quidem. Nesciunt sequi repellat hic provident, iusto incidunt ab animi deserunt, itaque debitis vel cum necessitatibus dolor maxime doloribus veritatis"
    },
    {
        title: "محصول 3",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, iste quidem. Nesciunt sequi repellat hic provident, iusto incidunt ab animi deserunt, itaque debitis vel cum necessitatibus dolor maxime doloribus veritatis"
    },
    {
        title: "محصول 4",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, iste quidem. Nesciunt sequi repellat hic provident, iusto incidunt ab animi deserunt, itaque debitis vel cum necessitatibus dolor maxime doloribus veritatis"
    },
    {
        title: "محصول 5",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, iste quidem. Nesciunt sequi repellat hic provident, iusto incidunt ab animi deserunt, itaque debitis vel cum necessitatibus dolor maxime doloribus veritatis"
    },
    {
        title: "محصول 6",
        detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, iste quidem. Nesciunt sequi repellat hic provident, iusto incidunt ab animi deserunt, itaque debitis vel cum necessitatibus dolor maxime doloribus veritatis"
    }
];

export function Products() {
    return (
        <section className='w-full bg-blue-200'>
            <div className='max-w-300 mx-auto'>
                <div className="m-2">
                    <h1 className='text-6xl'>محصولات</h1>
                </div>
                <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                    {products.map((p,i)=>{
                        return (<ProductComponent key={i}  title={p.title} detail={p.detail}/>)
                    })}
                </div>
            </div>
        </section>
    )
}

