const express = require('express'),
      {calcular, enviar} = require('../funcionesUtiles/funtion.js')

let matriz =[]
const router = express.Router()
router.post('/gold/process_money', (req, res) =>{
    console.log(req.session.oro);
    const lugar = req.body.lugar
    const devuelta = calcular(lugar)
    console.log(devuelta);
    //req.session.oro = req.session.oro + devuelta.newOro
    req.session.oro += devuelta.newOro
    req.session.mensajes += devuelta.text
    
    res.redirect('/')
})
router.get('/',async (req, res) => {

    if (req.session.oro == undefined) {
        req.session.oro = 0
    }
    if (req.session.mensajes == undefined) {
        req.session.mensajes = []
    }
    
    const datos = {
        oro: req.session.oro,
        msjs: req.session.mensajes
    }

    res.render('index.html', datos)
})



module.exports = router;