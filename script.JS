const categorias = document.getElementById('categorias')
categorias.style.backgroundImage = "url('midia/pets.jpeg')"

function passar(){
    if (categorias.style.backgroundImage == 'url("midia/pets.jpeg")'){
        categorias.style.backgroundImage = "url('midia/animais.jpeg')"
        categorias.style.backgroundPosition = 'top center'

    } else if (categorias.style.backgroundImage == 'url("midia/animais.jpeg")'){
        categorias.style.backgroundImage = "url('midia/bonecas.jpeg')"
        categorias.style.backgroundPosition = 'center center'

    } else if (categorias.style.backgroundImage == 'url("midia/bonecas.jpeg")'){
        categorias.style.backgroundImage = "url('midia/maternidade.jpeg')"
        categorias.style.backgroundPosition = 'center center'

    } else if (categorias.style.backgroundImage == 'url("midia/maternidade.jpeg")'){
        categorias.style.backgroundImage = "url('midia/personagens.jpeg')"
        categorias.style.backgroundPosition = 'top center'

    } else if (categorias.style.backgroundImage == 'url("midia/personagens.jpeg")'){
        categorias.style.backgroundImage = "url('midia/santos.jpeg')"
        categorias.style.backgroundPosition = 'center center'
        
    } else if (categorias.style.backgroundImage == 'url("midia/santos.jpeg")'){
        categorias.style.backgroundImage = "url('midia/pets.jpeg')"
        categorias.style.backgroundPosition = 'top center'
    }
}
function voltar(){
    if (categorias.style.backgroundImage == 'url("midia/pets.jpeg")'){
        categorias.style.backgroundImage = "url('midia/santos.jpeg')"
        categorias.style.backgroundPosition = 'center center'

    } else if (categorias.style.backgroundImage == 'url("midia/santos.jpeg")'){
        categorias.style.backgroundImage = "url('midia/personagens.jpeg')"
        categorias.style.backgroundPosition = 'top center'
    
    } else if (categorias.style.backgroundImage == 'url("midia/personagens.jpeg")'){
        categorias.style.backgroundImage = "url('midia/maternidade.jpeg')"
        categorias.style.backgroundPosition = 'center center'
        
    } else if (categorias.style.backgroundImage == 'url("midia/maternidade.jpeg")'){
        categorias.style.backgroundImage = "url('midia/bonecas.jpeg')"
        categorias.style.backgroundPosition = 'center center'

    } else if (categorias.style.backgroundImage == 'url("midia/bonecas.jpeg")'){
        categorias.style.backgroundImage = "url('midia/animais.jpeg')"
        categorias.style.backgroundPosition = 'top center'

    } else if (categorias.style.backgroundImage == 'url("midia/animais.jpeg")'){
        categorias.style.backgroundImage = "url('midia/pets.jpeg')"
        categorias.style.backgroundPosition = 'top center'

    }
}
/*function aumentar(){
    categorias.removeAttribute("style");
    const img = document.createElement('img')
    img.src = 'midia/bonecas.jpeg'
    categorias.appendChild(img)
    img.style.display = 'block'
    img.style.margin = 'auto'
    img.style.width = '75%'
    categorias.style.height = img.offsetHeight + 'px'
}*/