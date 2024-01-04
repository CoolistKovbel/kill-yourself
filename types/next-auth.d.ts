import NextAuth from "next-auth";

declare module "next-auth" {

    interface User {
        username: string,
        metaAddress: string,
        email: string
        profileImage: string,
        tokens: number
    }

    interface Session {
        user: User & {
            username: string,
            MetaAddress: string,
            profileImage: string
        }
        token: {
            username: string,
            MetaAddress: string,
            profileImage: string
        }
    }
}