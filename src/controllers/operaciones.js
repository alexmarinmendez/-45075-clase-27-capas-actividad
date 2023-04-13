import { sumar, restar, multiplicar, dividir, listar } from '../servicies/operaciones.js'

export const suma = async(req, res) => {
    const { num1, num2 } = req.query
    const result = await sumar(+num1, +num2)
    res.send(`El resultado de la suma es ${result}`)
}

export const resta = async(req, res) => {
    const { num1, num2 } = req.query
    const result = await restar(+num1, +num2)
    res.send(`El resultado de la resta es ${result}`)
}

export const multiplicacion = async(req, res) => {
    const { num1, num2 } = req.query
    const result = await multiplicar(num1, num2)
    res.send(`El resultado de la multiplicacion es ${result}`)
}

export const division = async(req, res) => {
    const { num1, num2 } = req.query
    const result = await dividir(num1, num2)
    res.send(`El resultado de la division es ${result}`)
}

export const lista = async(req, res) => {
    res.send('Lista')
}