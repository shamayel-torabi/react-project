import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "./app/lib/getUser";
import { z } from "zod";

const loginSchema = z.object({
   email: z.string().email(),
    password: z.string().min(4) 
  })

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (user && user.password === password) return user;
        }

        return null;
      },

    }),    
  ],
});


