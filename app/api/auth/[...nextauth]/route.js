import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import connectDb from '@/db/connectDb';
import User from '@/models/User';
import Payment from '@/models/Payment';
// In imports ko add karein
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@/db/mongoClient"


export const authoptions = NextAuth({
    // Adapter ko yahan add karein
    adapter: MongoDBAdapter(clientPromise),
    providers: [
      // Aapke saare existing providers yahan hain
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID,
        clientSecret: process.env.APPLE_SECRET
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
      // Passwordless / email sign in
      EmailProvider({
        server: process.env.MAIL_SERVER,
        from: 'NextAuth.js <no-reply@example.com>'
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
         if(account.provider == "github") {
          await connectDb()
          // Check if the user already exists in the database
          const currentUser =  await User.findOne({email: user.email}) // Yahan 'email' use karein
          if(!currentUser){
            // Create a new user
             const newUser = await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            })
          }
          return true
         }
         // Agar aap dusre providers use nahi kar rahe hain to unke liye false return kar sakte hain
         // Ya agar unka alag logic hai to yahan likh sakte hain
         return true // Sabhi providers ke liye allow karein for now
      },

      async session({ session, user, token }) {
        const dbUser = await User.findOne({email: session.user.email})
        if(dbUser) {
          session.user.name = dbUser.username
        }
        return session
      },
    }
  })

  export { authoptions as GET, authoptions as POST}