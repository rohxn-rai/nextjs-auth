import { DefaultSession, DefaultJWT } from "next-auth";
import { AdapterUser } from "@auth/core/adapters";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
  }
}
