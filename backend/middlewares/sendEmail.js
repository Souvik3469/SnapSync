const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transport = nodeMailer.createTransport({
  host: process.env.SMPT_HOST,
  port:  process.env.SMPT_PORT,
  auth: {
    user:  process.env.SMPT_MAIL,
    pass:  process.env.SMPT_PASS
  }
});
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transport.sendMail(mailOptions);
};

