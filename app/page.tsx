import { Button } from "@heroui/react";
import * as actions from "@/actions";
import { auth } from "@/lib/auth";

const LandingHomePage = async () => {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in!</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign out!</Button>
      </form>

      {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}
    </div>
  );
};

export default LandingHomePage;
