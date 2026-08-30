// HAMBURGER MENU (mobile menu)
const hamMenu = document.querySelector('.ham-menu');
const hiddenMenu = document.querySelector('.hidden-menu');
const navLink = document.querySelectorAll('.nav-link');
const introContainer = document.querySelector('.intro-container');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (!hiddenMenu.classList.toggle('active')){
        hiddenMenu.style.display = "none";
        document.documentElement.style.overflowY = '';
    }else{
        hiddenMenu.style.display = "flex";
        document.documentElement.style.overflowY = 'hidden';
        navLink.forEach(link => link.addEventListener("click", () => {
            hiddenMenu.style.display = "none";
            hamMenu.classList.remove('active');
            hiddenMenu.classList.remove('active');
            document.documentElement.style.overflowY = '';
        }))
        introContainer.addEventListener("click", () => {
            hiddenMenu.style.display = "none";
            hamMenu.classList.remove('active');
            hiddenMenu.classList.remove('active');
            document.documentElement.style.overflowY = '';
        })
    }
});

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller-cont");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item =>{
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute("aria-hidden", true)
            scrollerInner.appendChild(duplicateItem)
        });
    })
}

// PROJECTS SECTION--- rendering project cards
fetch('JSON/projects.json')
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById('project');
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `    
                <img class="card-img" src="${project.image}" alt="project-img">
                <div class="card-info">
                
                    <h1 class="card-title">${project.title}</h1>
                    <p class="card-description">${project.description}</p>
                    <a class="card-link" href="${project.link}">View Project</a>
                </div>
            `;
        container.appendChild(card);
        });
    });

// MEMBERS SECTION
fetch('JSON/members.json')
    .then(res => res.json())
    .then(members => {
        const container = document.getElementById('member');
        members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                
                <div class="card-info">
                    <img class="card-img" src="${member.image}" alt="project-img">
                    <h1 class="card-name">${member.name}</h1>
                    <p class="card-role">${member.role}</p>
                    <a class="card-link" href="${member.link}">About Me</a>
                </div>
            `;
            container.appendChild(card);
        })
    })