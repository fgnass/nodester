#!/usr/bin/env node

var mailer = require('nodemailer')
  , lib    = require('../lib/lib')
  , config = require('../config')
  ;

var resets = lib.get_couchdb_database('password_resets')
  , mailerOpts = config.opt.mail

if (config.opt.SES) mailerOpts = {
  transport: 'SES',
  opts: config.opt.SES
}

var transport = mailer.createTransport(mailerOpts.transport, mailerOpts.config)

function send_email(doc) {
  transport.sendMail({
    sender  : 'support@nodester.com',
    to      : doc.id,
    subject : 'Password reset request',
    text    : 'Here is your password request token: ' + doc.value.token + '\n\nYou can reset your password via Nodester API or CLI'
  }, function (error, success) {
    console.log(new Date,'Reset password e-mail sent to: ' + doc.id)
    console.log(new Date, 'Message ' + success ? 'sent' : 'failed');
    reset_token(doc)
  });
}

function reset_token(doc) {
  resets.merge(doc.id, {
    email_sent: true
  }, function (err, res) {
    if (err) console.log(err)
  });
}

resets.view('tokens/unsent', function (err, doc) {
  if (!err) {
    for (i = 0; i < doc.length; i++)
    send_email(doc[i])
  } else {
    console.log(err)
  }
});
