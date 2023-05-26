import { SignUp } from "@clerk/nextjs";
import PublicPage from "~/components/public";

export default function Page() {
  return (
    <PublicPage>
      <SignUp />
    </PublicPage>
  );
}
