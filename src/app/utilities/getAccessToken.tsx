import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication({
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID!,
        authority: process.env.NEXT_PUBLIC_AZURE_AUTHORITY!,
        redirectUri: process.env.NEXT_PUBLIC_AZURE_REDIRECT_URI
    }
});

// Ensure the client is initialized before calling any MSAL function
async function initializeAuth() {
    await msalInstance.initialize();
}

export async function getAccessToken() {
    await initializeAuth();
    
    const account = msalInstance.getAllAccounts()[0];
    if (!account) {
        await msalInstance.loginPopup({ scopes: [`api://${process.env.NEXT_PUBLIC_AZURE_CLIENT_ID}/StockTracker`] });
    }
    const tokenResponse = await msalInstance.acquireTokenSilent({ 
        account, 
        scopes: [`api://${process.env.NEXT_PUBLIC_AZURE_CLIENT_ID}/StockTracker`]
    });

    return tokenResponse.accessToken;
}
