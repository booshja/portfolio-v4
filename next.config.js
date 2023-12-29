/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["images.unsplash.com", "res.cloudinary.com"],
    },
};

module.exports = withPlausibleProxy()(nextConfig);
