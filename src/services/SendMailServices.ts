import {resolve} from "path";
import nodeMailer, {Transporter} from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

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
        const npsPath = resolve(__dirname, "..", "views", "email", "npsMail.hbs") //BIBLIOTECA DE PATH PARA PEGAR O CAMINHO DA PASTA DE VIEW
        const templateFileContent = fs.readFileSync(npsPath).toString("utf8");

        const mailTemplateParse = handlebars.compile(templateFileContent);

        const html = mailTemplateParse({
            name: to,
            title: subject,
            description: body
        })

        const message = await this.client.sendMail({
            to, 
            subject,
            html,
            from: "NPS <noreplay@nps.com.br>"
        })

        console.log("Message sent: %s", message.messageId);
        console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(message));
    }

}

export default new SendMailService();