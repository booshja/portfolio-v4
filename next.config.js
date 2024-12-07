/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    experimental: {
        instrumentationHook: true,
    },
    images: {
        domains: [],
    },
};

module.exports = withPlausibleProxy()(nextConfig);
