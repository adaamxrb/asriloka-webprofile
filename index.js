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