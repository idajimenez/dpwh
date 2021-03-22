// env config
export const config = {
    apiUrl: process.env.REACT_APP_API_HOST,
    // oAuthService: 'oauth2-service/',
    clientCredentialInternal: process.env.REACT_APP_CLIENT_CREDENTIALS_INTERNAL
};

// keys for localstorage
export const storageKey = {
    accessToken: 'oldst_accesstoken',
    sidebarState: 'sidebarState'
};
