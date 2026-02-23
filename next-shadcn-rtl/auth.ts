import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "./lib/getUser";
import { IUser } from "./types/types";

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
