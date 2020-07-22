# Envío de correos "Amazon SES"
[![AWS SES](https://docs.aws.amazon.com/es_es/sdk-for-javascript/v2/developer-guide/images/code-samples-ses.png "AWS.SES")](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html "AWS SES")

## Para mayor información, consulte la guía oficial en: [Amazon SES](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html "AWS.SES")

## Requerimientos:
- Node.JS
- AWS SDK (librería)
- Cuenta en AWS
- Editor de texto (VS Code)

## Instalación:
- Crear carpeta y abrirla con el editor de texto
- Crear el archivo "index.js"
- Abrir la terminal y ubicarse en la carpeta del proyecto
- Escribir los siguientes comandos:
 - `npm init -y`
 - `npm install aws-sdk`

## Ejecución del script:
- Abrir la terminal y ubicarse en la carpeta del proyecto
- Escribir el siguiente comando:
 - `node index.js`
 
## Configuraciones:
*AWS.config.update*

|Variable|Descripción|Ejemplo|
|:-----:|:-----|-----:|
|[REGION]|Región donde se encuentra el servicio|"us-east-1" //EE.UU. Este (Norte de Virginia)   |
|[accessKeyId]|Access Key Id del usuario, se obtiene al ingresar al servicio IAM|"AJLA7LYANPSBLO4AHHVU"|
|[secretAccessKey]|Secret Access Key del usuario, se obtiene al ingresar al servicio IAM|"7cH0QlklOa6ffFIUGaJKdeSjMMSM4WTYv2NiTYf3"|

> Debe dar acceso la cuenta desde IAM el uso del servicio SES y dentro de la consola SES agregar los correos del destinatario y de la dirección de donde se envia, les llegará un correo de confirmación y deberán autorizar desde el correo enviadoDebe dar acceso la cuenta desde IAM el uso del servicio SES y dentro de la consola SES agregar los correos del destinatario y de la dirección de donde se envia, les llegará un correo de confirmación y deberán autorizar desde el correo enviado

---

### Notas Finales:
- Puede agregar más de un destinatario dentro del arreglo
- Puede cambiar el formato del cuerpo del correo, en el ejemplo se utiliza HTML, pero se puede reemplazar por "Text" para que se envie el correo sin formato
- Se recomienda el uso de "AWS SNS" para correos cuyo propósito sea el envío de notificaciones por medio de suscripción y se le permita al usuario dejar de recibir esas notificaciones
