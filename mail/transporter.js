const nodemailer = require("nodemailer");

module.exports = (sendto, templateName, name, link) => {
  const transporter = nodemailer.createTransport({
    host: process.env.node_mailer_user,
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.node_mailer_user,
      pass: process.env.node_mailer_password,
    },
    enableSsl: true,
  });

  const mailOptions = {
    from: process.env.node_mailer_user,
    to: sendto,
    subject: "Message from monomousumi contest",
    html: templateName(name, link),
  };

  transporter.sendMail(mailOptions);
};
