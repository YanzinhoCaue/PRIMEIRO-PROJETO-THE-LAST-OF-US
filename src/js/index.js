const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado()
        selecionarBotao(botao)
        escondarImagemAtiva()
        selecionarImagemAtiva(indice)
    })
})

function selecionarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa')
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado')
}

function escondarImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
