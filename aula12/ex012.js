var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
if (hora < 12) {
    console.log('É dia')
} else if (hora < 18) {
    console.log('Tarde')

} else {
    console.log('Noite')
}