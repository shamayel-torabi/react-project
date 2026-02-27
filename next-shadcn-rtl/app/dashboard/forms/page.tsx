import { BugReportForm } from "@/components/forms/form-bug-report";
import { FormTanstackCheckbox } from "@/components/forms/form-checkbox";
import { FormTanstackArray } from "@/components/forms/form-tanstack-array";
import { FormTanstackComplex } from "@/components/forms/form-tanstack-complex";
import { FormTanstackSelect } from "@/components/forms/form-tanstack-select";
import { FormTanstackSwitch } from "@/components/forms/form-tanstack-switch";
import { FormTanstackRadioGroup } from "@/components/forms/radio-group-demo";

export default function LifeCyclePage() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                <div>
                    <BugReportForm />
                </div>
                <div>
                    <FormTanstackComplex />
                </div>
                <div className="flex gap-4">
                    <FormTanstackCheckbox />
                    <FormTanstackRadioGroup />
                </div>
                <div className="flex gap-4">
                    <FormTanstackSwitch />
                    <FormTanstackSelect />
                </div>
                <div>
                    <FormTanstackArray />
                </div>
            </div>
        </div>
    )
}
