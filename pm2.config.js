const cwd = {
  production: '/home/deploy/list-editor/current',
};

module.exports = {
  'apps': [
    {
      'name': 'list-editor',
      'script': './initializers/server/index.js',
      'cwd': cwd[process.env.NODE_ENV],
      'env': {
        'NODE_ENV': 'development',
      },
      'env_production': {
        'NODE_ENV': 'production',
        'PORT': 3005,
      },
    },
  ],
  'deploy': {
    'production': {
      'key': '~/.ssh/id_rsa.pub',
      'user': 'deploy',
      'port': '2452',
      'host': 'list-editor.pochkun.net',
      'ref': 'origin/master',
      'repo': 'git@github.com:pochkuntaras/list-editor.git',
      'path': '/home/deploy/list-editor',
      'ssh_options': 'StrictHostKeyChecking=no',
      'post-deploy': 'ln -snf ~/shared/.env ~/list-editor/current/.env && npm install && npm run build:production && pm2 startOrRestart pm2.config.js --env production',
    },
  },
}
