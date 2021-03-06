var HOME = '/var/nodester';

exports.opt = {
  couch_user: 'nodester',
  couch_pass: 'password',
  couch_host: '127.0.0.1',
  couch_port: 5984,
  couch_prefix: 'nodester',
  couch_tables: ['coupons', 'nodefu', 'nextport', 'apps', 'repos', 'aliasdomains', 'password_resets', 'admins'],
  home_dir: HOME,
  app_dir: HOME + '/nodester',
  git_home_dir: '/git',
  apps_home_dir: '/app',
  public_html_dir: HOME + '/nodester/public',
  proxy_table_file: HOME + '/var/proxy_table.json',
  logs_dir: '/node/logs/',
  tl_dom: 'testnodester.com',
  api_dom: 'api.testnodester.com',
  git_user: 'nodester',
  git_dom: 'testnodester.com',
  coupon_code: 'CouponCode', // Remove or set to a falsy value in order to disable coupon feature.
  blocked_apps: ['www', 'api', 'admin', 'support', 'blog', 'site'],
  restart_key: 'KeepThisSecret',
  userid: 'nodester',
  app_uid: 100,
  enable_ssl: false, // Currently SSL forward to the app/api, when I have a wildcard cert to test, then all apps can have SSL.
  ssl_ca_file: '',
  ssl_cert_file: '',
  ssl_key_file: '',
  node_base_folder: '/opt/node-v0.4.9_npm_v1.0.3',

  // Uncomment this to emit status events via Redis pubsub
  // see http://bolt.io
  /*
  redis: {
    host: '127.0.0.1',
    port: 6379,
    user: 'nodester',
    auth: 'password'
  },
  */

  // Used by scripts/mailer.js to send password reset emails
  mail: {
    transport: 'SES', // see https://github.com/andris9/Nodemailer
    config: {
      AWSAccessKeyID: 'ACCESSKEY',
      AWSSecretKey: 'SECRETKEY',
      ServiceUrl: 'https://email.us-east-1.amazonaws.com',
    }
  }

};
