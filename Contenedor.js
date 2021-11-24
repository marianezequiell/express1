const fs = require('fs')

class Contenedor {
    constructor () {
    }
    
    static file = "productos.txt"


    getById(number) {           
        try {
            let data = fs.readFileSync(Contenedor.file, 'utf-8')
            data = JSON.parse(data)
            let wanted = data.filter(condition => condition.id === number)
            wanted = JSON.stringify(wanted)
            return wanted
        } catch(err) {
            console.log(err)
        }
    }

    getAll() {
        let data = fs.readFileSync(Contenedor.file, 'utf-8')
        return data
    }
}

module.exports = Contenedor