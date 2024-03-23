import User from "@models/userModel";
import { connectToDB } from "@utils/database";
import nextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'

const handler = nextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async session({session}){
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            
            session.user.id = sessionUser?.id.toString();
            return session
        },

        async signIn({profile}){
            try{
                await connectToDB()

                const userExists = await User.findOne({email: profile.email})

                if(!userExists){
                    await User.create({
                        email: profile.email,
                        userName: profile.login,
                        photo: profile.avatar_url
                    })
                }

                return true
            }catch(error){
                console.log(error);
                return true
            }
        }
    }
})

export {handler as GET, handler as POST}