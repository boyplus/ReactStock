module.exports = {
  apps : [{
    name: 'React-Stock-Server',
    script: './build/main.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      FB_CLIENT_ID: '1182499288808470',
	FB_CLIENT_SECRET: 'dc4cbc167e9b641fa03b53dc03041b60',
	CLIENT_URL: 'https://stock.cscms.me',
	DB_USER: 'root',
	DB_PASSWORD: 'password',
	DB_HOST: '127.0.0.1'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
