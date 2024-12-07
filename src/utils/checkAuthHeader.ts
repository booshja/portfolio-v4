export const checkAuthHeader = (headers: Headers) => {
    const authHeader = headers.get("Authorization");
    if (!authHeader) return false;

    return authHeader === process.env.REQUEST_AUTH_HEADER;
};
