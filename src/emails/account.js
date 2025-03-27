const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = (email, name) => {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let us know how things go with the application.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  transporter.sendMail({
    from: "rlee.andri@gmail.com",
    to: email,
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}.\nWe're sad to see you leave the app. If there's anything we could have done better or if you need assistance in the future, don't hesitate to reach out.\n\nTake care!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
