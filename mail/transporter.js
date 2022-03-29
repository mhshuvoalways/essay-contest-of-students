const nodemailer = require("nodemailer");

module.exports = (sendto, templateName, name, link) => {
  const transporter = nodemailer.createTransport({
    service: "SendinBlue",
    auth: {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SEND_MAIL_FROM,
    to: sendto,
    subject: "Message from monomousumi contest",
    html: templateName(name, link),
  };

  transporter.sendMail(mailOptions);
};
