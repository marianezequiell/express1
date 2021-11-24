const express = require('express')
const Contenedor = require('./Contenedor.js')

const app = express()

let seeProducts = new Contenedor()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const server = app.listen(process.env.PORT || 3000)

app.get('/', (request, response) => {
    response.send(
        `
            <ul>
                <li><a href="/productos">Listado de productos</a></li>
                <li><a href="/productoRandom">Producto random</a></li>
            </ul>
        `
    )
})

app.get('/productos', (request, response) => {
    response.send(`${seeProducts.getAll()}`)
})

app.get('/productoRandom', (request, response) => {
    let randomNumber = getRandomInt(1, 4)
    response.send(`${seeProducts.getById(randomNumber)}`)
})