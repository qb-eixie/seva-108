const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'iskconseva108@gmail.com',
      pass: 'awmo jape edmi hhpe'
    }
  });
  
  async function main() {
    const info = await transporter.sendMail({
      from: 'iskconseva108@gmail.com',
      to: xxx, 
      subject: "Hello", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });
    console.log("Mail sent: %s", info.messageId);
  }
  
  main().catch(console.error);
  
