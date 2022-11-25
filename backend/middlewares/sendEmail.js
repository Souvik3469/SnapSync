const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transport = nodeMailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "916a76ab9d4845",
    pass: "55337ff093c855"
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