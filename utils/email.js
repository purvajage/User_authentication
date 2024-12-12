const nodemailer=require("nodemailer");
exports.sendmail=async(to,subject,next)=>{
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD,
        },
    });
    await transporter.sendMail({from:process.env.EMAIL,to,subject,text});
};