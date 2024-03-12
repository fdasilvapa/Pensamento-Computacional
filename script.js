document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
    var nome = document.getElementById('nome').value
    var nota1 = parseInt(document.getElementById('nota1').value)
    var nota2 = parseInt(document.getElementById('nota2').value)
    var nota3 = parseInt(document.getElementById('nota3').value)

    var gif = document.getElementById('gif')
    var gifElement = document.createElement('img')

    var media = Math.round((nota1 + nota2 + nota3)/3)

    var result = document.getElementById('result')
    var msg = document.getElementById('msg')

    if (media > 60){
        msg.innerText = `Parabéns ${nome}, você foi aprovado com média ${media}.`
        gifElement.src = "emoji.gif"

    }else{
        msg.innerText = `Parece que não foi dessa vez ${nome}, sua média foi ${media} e não deu pra passar.`
        gifElement.src = "pikachu.gif"
    }
    gifElement.alt = 'GIF'

    gif.appendChild(gifElement)

    result.style.display = `block`

})