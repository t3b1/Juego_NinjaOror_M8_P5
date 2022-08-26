const express = require('express'),
      path = require("path"),
      nunjucks = require("nunjucks"),
      session = require('express-session')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use("/static", express.static("static"))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(session({secret: 'awante_navalito'}))
nunjucks.configure(path.resolve(__dirname, "templates"), {
    express: app,
    autoscape: true,
    noCache: true,
    watch: true,
});

// Impórtamos las rutas
app.use(require('./routes/rutaNinja.js'))
// Ruta por defecto
app.get('*', (req, res) => {
  res.send('Ruta no implementada')
})

app.listen(3000, () => {
    console.log('Servidor ejecutando en puerto 3000')
})