// ========== Services toggle
const servicesButtons = document.querySelectorAll('.service_item');
const serviceDetails = document.querySelector('.services_right');


const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
        <h3>${details.title}</h3>
         ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
    `
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })
    programsButtons.forEach(button => {
        button.classList.remove('active');
    })
}

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active')
    })
})

getService('berpengalaman')


// ========== Mixitup

const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');


// ========== Programs
const programsButtons = document.querySelectorAll('.program_item');
const programDetails = document.querySelector('.programs_right');

const getProgram = (category) => {
    const details = programsData.find(item => item.category === category);
    programDetails.innerHTML = `
        <h3>${details.title}</h3>
         ${details.description.map(paragraph => "<p>" + paragraph + "</p>").join('')}
    `
}

programsButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass(); //const remove wth services
        const programClass = item.classList[1];
        getProgram(programClass)
        item.classList.add('active')
    })
})

getProgram('indoorTraining')


// ========== theme toggle (light & dark mode)
const themeBtn = document.querySelector('.nav_theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        // change toggle icon 
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
        // save theme to local storage
        window.localStorage.setItem('theme', bodyClass);
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        // change toggle icon 
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        // save theme to local storage
        window.localStorage.setItem('theme', bodyClass);
    }
})


// load theme on load
window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
})


// galeri
// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true,
//     'disableScrolling': true
// })


// ========== nav toggle (small screens)
const navMenu = document.querySelector('.nav_menu')
const navOpenBtn = document.querySelector('.nav_toggle-open')
const navCloseBtn = document.querySelector('.nav_toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn. style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn. style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)

// close nav menu on click of nav link on small screens
const navItems = navMenu.querySelectorAll('li');
if(window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}