const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY
});

const params = {
    Destination: {
        ToAddresses: [
            process.env.CORREODESTINO,
        ]
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "<H1>Correo SES</H1></br></br><p>Correo enviado por SES desde <strong>Node.JS !!!!</strong></p>"
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Asunto o título del correo'
        }
    },
    Source: process.env.CORREOORIGEN,
    ReplyToAddresses: [
        process.env.CORREORESPUESTAA,
    ],
};

const enviarCorreo = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

enviarCorreo
    .then(
        function (data) {
            console.log(data.MessageId);
        })
    .catch(
        function (err) {
            console.error(err, err.stack);
        });
