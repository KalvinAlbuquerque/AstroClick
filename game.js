/* Função responsável por ajustar a altura e largura da janela
   A janela pode ser redimensionda, portanto são medidas variáveis.
*/
var windowHeight = 0
var windowWidth = 0
function getWidth_Height_Window()
{
    windowHeight = window.innerHeight 
    windowWidth = window.innerWidth
}


function gerarPosicaoAleatoria()
{

    getWidth_Height_Window()

    //Gerando coordenadas aleatórias com base no tamanho da janela atual.
    //O Math.random() gera números aleatórios de 0 a 1
    var posY = Math.floor(Math.random() * windowHeight  ) - 90
    var posX = Math.floor(Math.random() * windowWidth) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
    console.log(windowWidth, windowHeight)
    console.log(posX, posY)

    /* Gerando diferentes inimigos aleatoriamente */
    var enemie = document.createElement('img')
    var numberEnemie = Math.floor(Math.random() * 3)
    console.log(numberEnemie)
    switch (numberEnemie)
    {
        case 0:
        {
            enemie.src = 'imgs/blueOctopus.png'
            break;
        }
        case 1:
        {
            enemie.src = 'imgs/enemie.png'
            break;
        }
        case 2:
        {
            enemie.src = 'imgs/enemieOctopus.png'
            break;
        }
    }

    enemie.className = "enemies"
    enemie.style.left = posX + 'px'
    enemie.style.top = posY + 'px'
    enemie.style.position = 'absolute'

    /* Adicionando o elemento no body */
    document.body.appendChild(enemie)

}



