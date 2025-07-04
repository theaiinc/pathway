module.exports = {
  apps: [
    {
      name: 'pathway-api',
      script: './dist/apps/api/src/server.js',
      instances: 1,
      autorestart: true,
      cwd: '../../',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        // The ChromaDB container is running on the same machine
        CHROMA_DB_URL: 'http://localhost:8000',
        // Add any other production environment variables here
      },
    },
  ],
};
