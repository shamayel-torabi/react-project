import { type DefaultSession } from "next-auth";


declare module "next-auth" {
  interface Session extends DefaultSession  {
    accessToken?: string;
  }

  interface User {
    role: string;
  }

  interface JWT {
    accessToken?: string;
  }
}