import { Suspense } from 'react';
import { LoginForm } from '../ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}