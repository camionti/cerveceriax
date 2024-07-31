var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post ('/' , async (req, res, next) => {

var nombre = req.body.nombre;
var apellido = req.body.apellido;
var email = req.body.email;
var telefono = req.body.tel;
var mensaje = req.body.mensaje;

console.log(req.body)

var obj = 
  to: 'camiontivero1@gmail.com',
  subject:'Contacto desde la web',
  html: nombre + " " + apellido + " se contacto a traves y quiere mas info" + email +
<br> "Ademas, hizo el comentario:" + mensaje + . "</br> + "Su tel es" + telefono 
} //cierra var obj

var transporter = nodemailer.createTransport({
 
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERS,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

res.render('index',{
  message: "mensaje enviado correctamente",
})

  });

module.exports = router;
