import { Lifecycle } from "@/app/dashboard/lifecycle/life-cycle";

import { DialogCloseButton } from "./dialog-demo";
import { AlertDialogDemo } from "./alert-dialog-demo";
import { ButtonGroupeDemo } from "./button-group-demo";
import { ContextMenuDemo } from "./contex-menu-demo";
import { HoverCardDemo } from "./hover-card-demo";
import { ItemDemo } from "./item-demo";
import { RadioGroupDescription } from "./RadioGroupDescription";

export default function LifeCyclePage() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                <Lifecycle />
                <DialogCloseButton />
                <AlertDialogDemo />
                <ButtonGroupeDemo />
                <ContextMenuDemo/>
                <HoverCardDemo/>
                <ItemDemo/>
                <RadioGroupDescription/>
            </div>
        </div>
    )
}

