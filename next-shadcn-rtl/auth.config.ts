import type { NextAuthConfig } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     accessToken?: string;
//   }

//   interface JWT {
//     accessToken?: string;
//   }
// }

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard && isLoggedIn) {
        return true; // Redirect unauthenticated users to login page
      }
      return true;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;
      return { ...token, accessToken: account?.access_token };
    },
    async session({ session, token }) {
      if (token?.accessToken) session.accessToken = token.accessToken;

      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
