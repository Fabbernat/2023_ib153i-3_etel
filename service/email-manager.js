const { createTransport } = require('nodemailer');

class EmailManager {
    async sendEmail(to, subject, text) {
        const transporter = createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
                user: "bence02.info@gmail.com",
                pass: "xsmtpsib-27aed5ae24a3c8727e35337827f9b2c492c33cb2f2db8abac03beffeb4df057d-qYHphJv5BmLEXUQw",
            },
        });
        
        const mailOptions = {
            from: 'wanfood.notifications@gmail.com',
            to: to,
            subject: subject,
            text: text
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    };
};


module.exports = EmailManager;