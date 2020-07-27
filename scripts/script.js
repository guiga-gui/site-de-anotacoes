dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
function clicar() {
    now = new Date
    var note = document.createElement("anotado")
    var d = document.getElementById("anotar").value
    var conteudoNovo = document.createTextNode(`${dayName[now.getDay()]} ${now.getDate()} ${monName[now.getMonth()]} | ${d}`)
    note.appendChild(conteudoNovo)
    var divAtual = document.getElementById("anotado1")
    document.body.insertBefore(note, divAtual)
}