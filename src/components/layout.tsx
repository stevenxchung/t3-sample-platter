import { type PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="w-full border-x border-slate-400 md:max-w-2xl">
        <div className="h-36 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:max-w-2xl"></div>
        {props.children}
      </div>
    </main>
  );
};
