import axios from "axios";
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: "novo" as string,
      clientSecret: "WSsCrKby0nHmq1MFUmvom2IAT4lKaZg0" as string,
      issuer: "http://localhost:8080/realms/carlos",
      accessTokenUrl: `http://localhost:8080/realms/carlos/protocol/openid-connect/token`,
      requestTokenUrl: `http://localhost:8080/realms/carlos/protocol/openid-connect/auth`,
      jwks_endpoint:"http://localhost:8080/realms/carlos/protocol/openid-connect/certs",
      
    }),
  ],
  session: {
    
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

  
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
    
    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
  
  },
  jwt: {
    secret: "jghgsgaAjhsya765621KKJsua",
  },

  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;

    },

    async session({ session, user, token }) {
        if(token){
            // @ts-ignore
            session.token = token.accessToken
        }
      return session;
    },
    async jwt( {token, user, account, profile} ) {
        if (account) {
            token.accessToken = account.access_token;
            token.idToken = account.id_token
        }
        return token;
    },
  },

  events: {
    async signOut({ session, token }) {
      //redirect(`http://192.168.1.4:8080/realms/carlos/protocol/openid-connect/logout?post_logout_redirect_uri=http:192.168.1.4:3000/estoque?id_token_hint=${token.accessToken}`)
      await axios.get(`http://192.168.1.4:8080/realms/carlos/protocol/openid-connect/logout?post_logout_redirect_uri=http:192.168.1.4:3000/estoque&id_token_hint=${token.idToken}`).then(()=> console.log("Deslogado")).catch((erro)=> {})
    },
    signIn(message) {
        console.log({user: message.account})
    },
    session(message) {
      //console.log({ sessao: message.session.user });
    },
  },
});

export { handler as GET, handler as POST };
