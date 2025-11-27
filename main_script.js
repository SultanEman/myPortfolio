'use strict';

// Landing page animation



const landing = document.querySelector('.landing-page');

const mainHeader = document.querySelector('.main-header');
const mainContent = document.querySelector('main');
const pageFooter = document.querySelector('.page_footer');

const projects = document.querySelector('.main_projects');

const anime1 = document.querySelector('.icon-laptop');
const anime2 = document.querySelector('.title');
const anime3 = document.querySelectorAll('.icons .icon');
const anime4 = document.querySelector('.bio');

const backTo = document.querySelector('.back_to_top');

const mainAbout = document.querySelector('.main__about');

const projectCard = document.querySelectorAll('.project_card');

const homeLink = document.querySelector('.main-nav ul li:nth-child(1)');
const aboutLink = document.querySelector('.main-nav ul li:nth-child(2)');
const projectLink = document.querySelector('.main-nav ul li:nth-child(3)');
const serviceLink = document.querySelector('.main-nav ul li:nth-child(4)');
const contactLink = document.querySelector('.main-nav ul li:nth-child(5)');

const prof = document.querySelector('.title');

const mainService = document.querySelector('.main_services');

const mainContacts = document.querySelector('.main_contacts');

const title = anime2;
const githubIcon = anime3[0];
const projectsIcon = anime3[1];
const profileIcon = anime3[2];

const animeArray = [];
animeArray.push(anime1);
animeArray.push(anime2);
animeArray.push(anime3);
animeArray.push(anime4);


window.addEventListener("load", () => {
    let delay = 0; // global counter for all animations

    animeArray.forEach((cur) => {

        if (cur instanceof NodeList) {
            Array.from(cur).forEach((icon) => {
                delay += 1000; // add 1 second for each icon
                setTimeout(() => {
                    icon.classList.add("visible");
                }, delay);
            });

        } else {
            // single element
            delay += 1000; // appear after everything else
            setTimeout(() => {
                cur.classList.add("visible");
            }, delay);
        }
    });
});

prof.addEventListener('click', function () {
    landing.style.display = 'none';
    mainHeader.style.display = 'block';
    mainContent.style.display = 'block';
})


profileIcon.addEventListener('click', function (e) {
    landing.style.display = 'none';
    mainHeader.style.display = 'block';
    mainContent.style.display = 'block';
    mainAbout.scrollIntoView({ behavior: 'smooth' });
})

projectsIcon.addEventListener('click', function (e) {
    landing.style.display = 'none';
    mainHeader.style.display = 'block';
    mainContent.style.display = 'block';
    projects.scrollIntoView({ behavior: 'smooth' });
})


window.addEventListener('scroll', function (e) {

    document.querySelectorAll('.main-nav ul li').forEach(function (el) {
        if (el.classList.contains('selected')) {
            el.classList.remove('selected');
        }
    })
    homeLink.classList.add('selected');

    if (!(window.pageYOffset === 0)) {
        backTo.style.display = 'block';
    } else {
        backTo.style.display = 'none';
    }
    mainContent.style.opacity = '1';
    mainContent.style.transform = 'translateY(0px)';
    pageFooter.style.opacity = '1';

    const rect = mainAbout.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
        mainAbout.style.opacity = 1;
        mainAbout.style.transform = 'translateY(0)';
        document.querySelectorAll('.main-nav ul li').forEach(function (el) {
            if (el.classList.contains('selected')) {
                el.classList.remove('selected');
            }
        })
        aboutLink.classList.add('selected');

    }

    projectCard.forEach((el) => {
        const rectCard = el.getBoundingClientRect();
        if (rectCard.top < window.innerWidth / 3 && rectCard.bottom > 0) {
            el.style.opacity = 1;
            document.querySelectorAll('.main-nav ul li').forEach(function (el) {
                if (el.classList.contains('selected')) {
                    el.classList.remove('selected');
                }
            })
            projectLink.classList.add(('selected'));
        }
    })

    const serviceRect = mainService.getBoundingClientRect();
    if (serviceRect.top < window.innerHeight / 3 && serviceRect.bottom > 0) {
        mainService.style.opacity = 1;
        mainService.style.transform = 'translateY(0)';
        document.querySelectorAll('.main-nav ul li').forEach(function (el) {
            if (el.classList.contains('selected')) {
                el.classList.remove('selected');
            }
        })
        serviceLink.classList.add(('selected'));
    }

    const contactRect = mainContacts.getBoundingClientRect();
    if (contactRect.top < window.innerHeight / 3 && contactRect.bottom > 0) {
        document.querySelectorAll('.main-nav ul li').forEach(function (el) {
            if (el.classList.contains('selected')) {
                el.classList.remove('selected');
            }
        })
        contactLink.classList.add(('selected'));
    }
})

backTo.addEventListener('click', function () {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
})


document.querySelectorAll('.main-nav ul li').forEach(function (e) {
    e.addEventListener('click', function () {

    })
})