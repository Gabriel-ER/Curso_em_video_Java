function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')

var res = document.querySelector('div#res')
if (fano.value.lenght==0 || Number(fano.value) > ano){
    window.alert('Verifique os dados e tente novamente')
} else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    var gênero = ``
    if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >= 0 && idade <10){
            //criança
            img.setAttribute('src','bebehomem.jpg')
        } else if(idade < 21){
            img.setAttribute('src','jovemhomem.jpg')
            //jovem
            
        }else if (idade < 50){
            img.setAttribute('src','adultohomem.jpg')
            //adulto
        }else {
            //velho
            img.setAttribute('src','idoso.jpg')
        }
    }else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >= 0 && idade <10){
            //criança
            img.setAttribute('src','bebemulher.jpg')
        } else if(idade < 21){
            img.setAttribute('src','jovemmulher.jpg')
            //jovem
            
        }else if (idade < 50){
            img.setAttribute('src','adultomulher.jpg')
            //adulto
        }else {
            //velho
            img.setAttribute('src','idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = (`É uma ${gênero} de ${idade} anos.`)
    res.appendChild(img)
}

}