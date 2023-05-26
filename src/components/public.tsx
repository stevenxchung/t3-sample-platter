import { type PropsWithChildren } from "react";

export default function PublicPage(props: PropsWithChildren) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 transform">
        {props.children}
      </div>
    </main>
  );
}
