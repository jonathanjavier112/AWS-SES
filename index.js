const AWS = require('aws-sdk');

AWS.config.update({
    region: [REGION],
    accessKeyId: [accessKeyId],
    secretAccessKey: [secretAccessKey]
});

const params = {
    Destination: {
        ToAddresses: [
            "correo2@ymail.com",
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
    Source: 'correo1@gmail.com',
    ReplyToAddresses: [
        'responder@mexico.mx',
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
