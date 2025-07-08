import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { supabase } from '../../../services/supabase';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,  
      authorization: {
        params: {
          scope: 'user'
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      console.log(user);
      const { email } = user;
      const { error } = await supabase.from('users').insert([{ email: email }]);
      if (error) {
        console.log("Deu erro ", error.message)
      }
      return true;
    }
  }
}

export default NextAuth(authOptions)