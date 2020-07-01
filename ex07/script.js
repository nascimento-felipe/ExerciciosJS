function mudar() {
    let src = document.querySelector('#foto')

    if (src.getAttribute('src') == 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true'){
    src.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true')}
    else {
        src.setAttribute('src', 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true')
    }
}