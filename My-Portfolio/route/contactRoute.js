const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "imedret@gmail.com",
      pass: "Maryamhind57@",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "imedret@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };
  smtpTransporter.sendMail(mailOptions, (error) => {
  console.log(mailOptions);
    try {
      res.status(200).json({ msg: "Thank You For Contacting Imed." });
    } catch (error) {
      res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;