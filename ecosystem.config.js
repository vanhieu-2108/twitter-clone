// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'twitter',
      script: 'dist/index.js',
      env: {
        NODE_ENV: 'development',
        // Riêng NODE_ENV có thể truy cập thông qua process.NODE_ENV || process.env.NODE_ENV
        // Còn lại sẽ truy cập thông qua process.env.TEN_BIEN
        TEN_BIEN: 'Gia Tri'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      env_staging: {
        NODE_ENV: 'staging'
      }
    }
  ]
}
