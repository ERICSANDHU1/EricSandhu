/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config options go here
    reactStrictMode: true,
    images: {
        domains: ['your-image-domain.com'], // Replace with actual domain if needed
    },
    eslint: {
        ignoreDuringBuilds: false, // Set to true if you want to allow lint errors during build
    },
};

export default nextConfig;
