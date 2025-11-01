import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Handle modules that reference browser APIs on server-side
    if (isServer) {
      config.externals.push({
        'pino-pretty': 'pino-pretty',
        '@react-native-async-storage/async-storage': '@react-native-async-storage/async-storage',
      });
    }

    return config;
  },
};

export default nextConfig;
