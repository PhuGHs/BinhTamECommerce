import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "text", placeholder: "Enter email"},
          password: { label: "Password", type: "password", placeholder: "Enter password" }
        },
        async authorize(credentials, req) {
          const {email, password} = credentials as any;
          const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password
            })
          });
          const user = await res.json();
          if(res.ok && user.errCode === 0) {
            return user.user;
          }
          else
          return null;
        },
      }),
    // ...add more providers here
  ],

  callbacks: {
    async jwt({ token, user }) {
        return { ...token, ...user };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.user = token;
        return session;
    },
},

  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/login"
  }
}

export default NextAuth(authOptions)