
/** @type {import('postcss-load-config').Config} */
const config = {
  images: {
    remotePatterns:{
      protocol: 'https',
      hostname: 'lovely-flamingo-139.convex.cloud'
    }
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
