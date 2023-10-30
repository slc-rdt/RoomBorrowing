module.exports = {
    script: "serve",
    name: "roomBorrowing-frontend",
    env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: 6971,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
    }
}