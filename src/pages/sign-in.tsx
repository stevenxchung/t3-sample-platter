import { SignIn } from "@clerk/nextjs";
import PublicPage from "~/components/public";

export default function Page() {
  return (
    <PublicPage>
      <SignIn />
    </PublicPage>
  );
}
