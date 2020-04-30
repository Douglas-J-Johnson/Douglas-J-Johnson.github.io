const aboutSelect = document.getElementById('about-select');
const projectsSelect = document.getElementById('projects-select')
const aboutPage = document.getElementById('about-page');
const projectsPage = document.getElementById('projects-page')

aboutSelect.addEventListener('click',selectPage);
projectsSelect.addEventListener('click',selectPage);

let selectedElement = aboutSelect;

function setState () {
    if(selectedElement === aboutSelect) {
        aboutSelect.classList.add('selected')
        aboutPage.style.display = 'block'
        projectsSelect.classList.remove('selected')
        projectsPage.style.display = 'none'
    }
    else if(selectedElement === projectsSelect) {
        aboutSelect.classList.remove('selected')
        aboutPage.style.display = 'none'
        projectsSelect.classList.add('selected')
        projectsPage.style.display = 'block'
    }
}

function selectPage (event) {
    eventTarget = event.target

    if (eventTarget === selectedElement) {
        return
    }
    else
    {
        selectedElement = eventTarget
        setState()
    }
}

setState()