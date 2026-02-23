'use client';
 
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { authenticate } from '../actions/authenticate';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
 
export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">
          با ورود رایانامه و گذرواژه به وبگاه وارد شوید.
        </h1>
        <div className="w-full">
          <div>
            <Label htmlFor="email"  >
              رایانامه
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <Label  htmlFor="password">
              گذرواژه
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={4}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          ورود
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}