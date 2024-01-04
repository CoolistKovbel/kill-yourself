import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";


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
      async authorize(credentials: Record<"username" | "password", string> | undefined) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

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

        const profileImage: string | null = existingUser.profileImage || "";

        return {
          id: existingUser.id,
          username: existingUser.username || "",
          email: existingUser.email,
          metaAddress: existingUser.MetaAddress || "", 
          profileImage: profileImage, // 
          membership: existingUser.membership || false,
          password: existingUser.password || "", 
          tokens: existingUser.tokens || 24,
          createdAt: existingUser.createdAt || new Date(),
          updateAt: existingUser.updateAt || new Date(),
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(profile, "jwt token callback")

      if (user) {
        return {
          ...token,
          username: user.username,
          metaAddress: user.metaAddress,
          email: user.email,
          tokens: user.tokens
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
          tokens: token.tokens,
          id: token.id,
        },
      };
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
