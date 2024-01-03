import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", placeholder: "killYourSelf123" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        console.log(credentials, "auth lohin")

        const existingUser = await db.user.findUnique({
          where: { username: credentials?.username },
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username || "",
          email: existingUser.email,
          metaAddress: existingUser.MetaAddress || "",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: any; 
      user: User;
    }) {
      // console.log(profile, "jwt token callback")

      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        return {
          ...token,
          username: user.username,
          metaAddress: user.MetaAddress,
          email: user.email,
        };
      }

      return token;
    },
    async session({ session, token }) {
      // console.log(token, "Logging from the auth session funcion")
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          metaAddress: token.metaAddress,
          id: token.id,
        },
      };
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
