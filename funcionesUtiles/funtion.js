const money = function (max , min){
    return Math.floor(Math.random() * (max - min) + min)
}

function calcular (lugar) {
    let oroNuevo
    if(lugar =='farm'){
        oroNuevo = money(20,10)
    }else if(lugar == 'cave') {
        oroNuevo = money(10,5)
    }else if(lugar =='house'){
        oroNuevo = money(5,2)
    }else if(lugar =='casino'){
        oroNuevo = money(50,-50)
    }

    return recaudado = {
        text:`has obtinido ${oroNuevo} oros, en ${lugar}`,
        newOro: oroNuevo 
    }
}
function enviar (){
    if (req.session.oro == undefined) {
        req.session.oro = 0
    }
    if (req.session.mensajes == undefined) {
        req.session.mensajes = []
    }

    const datos = {
        oro: req.session.oro ,
        msjs: req.session.mensajes 
    }
}

module.exports = {calcular, enviar}