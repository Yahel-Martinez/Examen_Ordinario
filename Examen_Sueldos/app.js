const express = require('express')
const sueldos = require('./models/sueldos')
const bodyParser = require('body-parser')
const app = express()
const puerto = 3000

app.use(bodyParser.json())

app.listen(puerto, () => {
    console.log('servicio iniciado')
})

// Rutas
app.post('/sueldos/calcular', async (req, res) => {
    const { tipo, dias } = req.body;
    const data = await sueldos.findOne ({
        where: {
            tipo
        }
    });

    let { sueldoDiario, bonoMensual } = data;
    if (dias < 25) {
        bonoMensual = 0;
    }
    let total = sueldoDiario * dias + bonoMensual;
    res.send({
        tipo, dias, sueldoDiario, bonoMensual, total
    });
    
})
