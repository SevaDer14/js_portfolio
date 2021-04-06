const root = document.getElementById('root')

const header = () => {
    let headerContainer = document.createElement('div')
    headerContainer.classList.add('ui', 'inverted', 'segment')
    let nav = document.createElement('nav')
    nav.classList.add('ui', 'inverted', 'secondary', 'menu')
    let headerContent = document.createElement('a')
    headerContent.classList.add('item')
    headerContent.innerText = 'My Portfolio'
    
    nav.appendChild(headerContent)
    headerContainer.appendChild(nav)    
    root.appendChild(headerContainer)
}

const startPage = () => {
    let startPageContiner = document.createElement('div')
    startPageContiner.classList.add('ui', 'container')
    let content = document.createElement('h1')
    content.innerText = 'Hello World'
    
    startPageContiner.appendChild(content)
    root.appendChild(startPageContiner)    
}

const footer = () => {
    let footer = document.createElement('footer')
    footer.innerHTML = '<h4>Made with HTML, CSS & JavaScript</h4>'
    
    root.appendChild(footer)
}

document.addEventListener('DOMContentLoaded', () => {
    header()
    startPage()
    footer()
})