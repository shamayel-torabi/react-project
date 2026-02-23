import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <Card className="@container/card ">
      <CardHeader>
        <CardTitle>آزمایش دیالوگ هشدار</CardTitle>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 flex gap-5">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">نمایش هشدار</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>آیا مطلقا موافق هستید ؟</AlertDialogTitle>
              <AlertDialogDescription>
                این عملیات بازگشت پذیر نیست. آیا هنوز مایلید حساب شما حذف شئمد.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>رد</AlertDialogCancel>
              <AlertDialogAction>ادامه</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </CardContent>
    </Card>
  )
}
