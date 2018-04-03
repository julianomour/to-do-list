const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const {host,port,user,pass} = require('../config/mail.json');

var transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    }
  });

  transport.use('compile', hbs({
      viewEngine: 'Handlebars',
      viewPath: path.resolve('./app/resources/mail/'),
      extName: '.html'
      }))

  module.exports = transport