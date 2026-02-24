import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "./lib/getUser";
import { IUser } from "./types/types";
import { z } from "zod";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(4),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
        // username: { label: "Username" },
        // password: { label: "Password", type: "password" }

        // this define the properties like label, type etc. if you
        // dont want to make a custom login page yourself and instead use
        // use the one provided by the auth-js one
      
      },
      async authorize(credentials) {
        const parsedCredentials = formSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (user && user.password == password) {
            const u: IUser = {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
              role: user.role,
            };
            return u;
          }
        }

        return null;
      },
    }),
  ],
});
