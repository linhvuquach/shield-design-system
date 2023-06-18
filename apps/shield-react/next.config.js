const defineNextConfig = () => ({
    distDir: "next-build",
    output: "standalone",
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        );
        return config;
    },
    async redirects() {
        return [
            {
                source: "/storybook",
                destination: "/storybook/index.html",
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/app/:any*",
                destination: "/app/",
            },
        ];
    },
});
module.exports = defineNextConfig();
