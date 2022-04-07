import { useAuth0 } from '@auth0/auth0-react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <UserProvider user={user}>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
