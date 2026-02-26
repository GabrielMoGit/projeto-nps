import {Request, Response} from "express";
import nodeMailer, {Transporter} from "nodemailer";

class SendMailService{
    private client: Transporter;
    constructor(){
        nodeMailer.createTestAccount().then(account =>{
            let transporter = nodeMailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            });

            this.client = transporter;
        })
    }



    async execute(to: string, subject: string, body: string){

        const message = await this.client.sendMail({
            to, 
            subject,
            html: body,
            from: "NPS <noreplay@nps.com.br>"
        })

        console.log("Message sent: %s", message.messageId);
        console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(message));
    }

}

export {SendMailService};