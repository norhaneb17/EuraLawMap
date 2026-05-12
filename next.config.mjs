/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Assistant IA temporairement masqué — réintégrer en supprimant cette entrée
      {
        source: "/assistant",
        destination: "/",
        permanent: false, // 307 : redirection temporaire, facilement réversible
      },
    ];
  },
};

export default nextConfig;
