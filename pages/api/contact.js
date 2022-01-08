export default function (req, res) {
    require('dotenv').config()

    let nodemialer = require('nodemailer')
    const transporter = nodemialer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'dev.briannelson@gmail.com',
            pass: process.env.password
        },
        secure: true
    })

    const mailData = {
        from: 'dev.briannelson@gmail.com',
        to: '14nelsonb@gmail.com',
        subject: `Message From Website ${req.body.name}`,
        text: req.body.message,
        html: <div>{req.body.message}</div>

    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) 
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
    console.log(req.body)
    res.send()
}