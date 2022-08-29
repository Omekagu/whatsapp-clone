/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  images: {
    domains: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WrFiWO9cVU5PzovHJavfHqUSbhqY9a0sn6Jkupa_&s',
    ],
  },
};
module.exports = nextConfig;
