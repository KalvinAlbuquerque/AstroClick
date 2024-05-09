/* Função responsável por ajustar a altura e largura da janela
   A janela pode ser redimensionda, portanto são medidas variáveis.
*/
var windowHeight = 0
var windowWidth = 0
var lifeless = 1
var time = 11


function getWidth_Height_Window()
{
    windowHeight = window.innerHeight 
    windowWidth = window.innerWidth
}

var timer = setInterval(function()
{
    time-=1

    if(time < 0)
    {   
        clearInterval(timer)
        clearInterval(createEnemie)
        window.location.href = 'win.html'
    }

    document.getElementById('timer').innerHTML = time
},1000)


function gerarPosicaoAleatoria()
{
    getWidth_Height_Window()
    /* Removendo inimigo caso já exista na página */
    if(document.getElementById('enemie'))
    {
        document.getElementById('enemie').remove()

        if(lifeless > 3)
        {
            window.location.href = "game_over.html"
        }
        else
        {
            document.getElementById('l' + lifeless).src = "imgs/lifeless.png"
            lifeless++

        }
        
    }

    //Gerando coordenadas aleatórias com base no tamanho da janela atual.
    //O Math.random() gera números aleatórios de 0 a 1
    var posY = Math.floor(Math.random() * windowHeight  ) - 130
    var posX = Math.floor(Math.random() * windowWidth) - 130

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    /* Gerando diferentes inimigos aleatoriamente */
    var enemie = document.createElement('img')
    var numberEnemie = Math.floor(Math.random() * 3)
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
    enemie.id = 'enemie'
    enemie.onclick = function()
    {
        this.remove()
    }

    /* Adicionando o elemento no body */
    document.body.appendChild(enemie)

}

function getSelectedDifficulty()
{
    var difficultyForm = document.getElementsByName("difficulty")
    var selectedDifficulty
    
    for (var i = 0; i < difficultyForm.length; i++) {
        if (difficultyForm[i].checked) {
            selectedDifficulty = difficultyForm[i].value
            break
        }
    }
    
    return selectedDifficulty
}

function startGame()
{   
    var difficulty = getSelectedDifficulty(); 

    localStorage.setItem("difficulty", difficulty)

    window.location.href = 'game.html';
    
}



function createEnemie()
{ 
    var difficulty =  localStorage.getItem("difficulty")
    var timeDifficulty = 0

    switch(difficulty)
    {
        case 'easy':
            timeDifficulty = 1500
            break
        case 'medium':
            timeDifficulty = 1000
            break
        case 'hard':
            timeDifficulty = 800
            break
    }
    setInterval(function()
    {
        gerarPosicaoAleatoria()
    }, timeDifficulty)
}


