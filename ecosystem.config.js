module.exports = {
  apps : [{
    name: "app",
    script: "./retweetbot.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
