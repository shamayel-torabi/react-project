import { Lifecycle } from "@/components/life-cycle";


export default function LifeCyclePage() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                <Lifecycle/>
            </div>
        </div>
    )
}

