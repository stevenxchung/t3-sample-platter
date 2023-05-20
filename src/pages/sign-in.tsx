import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 transform">
        <SignIn />
      </div>
    </main>
  );
}
