import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn)
          return true;
        else return false;
      }
      return true;
    },
    jwt({ token, account, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      console.log("access_token:", account?.access_token);

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
        session.user.role = token.role as string;
      }
      if (token?.accessToken) session.accessToken = token.accessToken as string;

      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }

  interface User {
    role: string;
  }

  interface JWT {
    accessToken?: string;
  }
}
