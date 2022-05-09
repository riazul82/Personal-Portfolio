// selecting page loader elements
let loader = document.querySelector(".page-loader");

// page loader
function startLoading() {
    loader.classList.add("slide-down");
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
}


// selecting profile lightbox elements
let profileLightbox = document.querySelector(".profile-lightbox");
let lightboxShadow = document.querySelector(".lightbox-shadow");
let closeProfile = document.querySelector("#close-profile");
let lightboxProfileImg = document.querySelector("#my-pic");
let profileContent = document.querySelector(".profile-image");
let profileImg = document.querySelector(".profile-image img");
let controllScrolling = document.querySelector("body");

// profile lightbox
profileContent.addEventListener('click', function () {
    let getProfileImg = profileImg.src;
    lightboxProfileImg.src = getProfileImg;

    profileLightbox.classList.add("show-profile-lightbox");
    lightboxShadow.classList.add("show-shadow");
    controllScrolling.style.overflow = "hidden";

    closeProfile.onclick = function () {
        profileLightbox.classList.remove("show-profile-lightbox");
        lightboxShadow.classList.remove("show-shadow");
        controllScrolling.style.overflow = "auto";
    }
});


// selecting education section elements
let educationTitle = document.querySelector(".education-title").children;
let myEducation = document.querySelector(".container-myedu");
let myExperience = document.querySelector(".container-myexp");
let mySkills = document.querySelector(".container-skills");

// show eductation info by category
for (let i = 0; i < educationTitle.length; i++) {
    educationTitle[i].addEventListener('click', function () {
        for (let j = 0; j < educationTitle.length; j++) {
            educationTitle[j].classList.remove('active-title');
        }

        educationTitle[i].classList.add('active-title');

        let getDataAttr = this.getAttribute("data-edu");

        myEducation.classList.remove('active-edu');
        myExperience.classList.remove('acitve-edu');
        mySkills.classList.remove('active-edu');

        if (myEducation.getAttribute('data-edu') === getDataAttr) {
            myEducation.classList.add('active-edu');
            myExperience.classList.remove('active-edu');
            mySkills.classList.remove('active-edu');
        } else if (myExperience.getAttribute('data-edu') === getDataAttr) {
            myEducation.classList.remove('active-edu');
            myExperience.classList.add('active-edu');
            mySkills.classList.remove('active-edu');
        } else {
            myEducation.classList.remove('active-edu');
            myExperience.classList.remove('active-edu');
            mySkills.classList.add('active-edu');
        }
    });
}


// selecting header, slider and footer elements
let navbarItems = document.querySelectorAll('.nav-items > li > a');
let sectionItems = document.querySelectorAll('section');
let slider = document.querySelector('.slider');
let sliderText = document.querySelector('.slider-inner');
let footer = document.querySelector('#footer');

// navigation menu items
for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function () {
        for (let j = 0; j < navbarItems.length; j++) {
            navbarItems[j].classList.remove('menu-active');
        }

        this.classList.add('menu-active');
        let attrVal = this.getAttribute('data-list');

        for (let k = 0; k < sectionItems.length; k++) {
            sectionItems[k].classList.remove('active');
            footer.classList.remove('footer-active');

            if (sectionItems[k].getAttribute('id') === attrVal) {
                sectionItems[k].classList.add('active');
                if (attrVal === 'Contact') {
                    footer.classList.add('footer-active');
                }
                slider.classList.add('slide-move');
                sliderText.innerText = sectionItems[k].getAttribute('id');

                setTimeout(() => {
                    slider.classList.remove('slide-move');
                }, 900);
            }
        }
    });
}


// selecting about and hire button elements
let sectionAbout = document.querySelector(".about");
let sectionHome = document.querySelector(".home");
let sectionContact = document.querySelector(".contact");
let menuAbout = document.querySelector("#menu-about");
let menuContact = document.querySelector("#menu-contact");

// about button click actions
document.querySelector('#about-btn').onclick = function () {
    for (let j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove('menu-active');
    }

    menuAbout.classList.add('menu-active');
    sectionAbout.classList.add('active');
    sectionHome.classList.remove('active');
    slider.classList.add('slide-move');
    sliderText.innerText = sectionAbout.getAttribute('id');

    setTimeout(() => {
        slider.classList.remove('slide-move');
    }, 900);
};

// navbar profile name click actions
document.querySelector("#my-name").onclick = function () {
    for (let j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove('menu-active');
    }

    for (let k = 0; k < sectionItems.length; k++) {
        sectionItems[k].classList.remove('active');
    }

    footer.classList.remove('footer-active');
    menuAbout.classList.add('menu-active');
    sectionAbout.classList.add('active');
    slider.classList.add('slide-move');
    sliderText.innerText = sectionAbout.getAttribute('id');

    setTimeout(() => {
        slider.classList.remove('slide-move');
    }, 900);
};

// hire me button click actions
document.querySelector('#hire-me-btn').onclick = function () {
    for (let j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove('menu-active');
    }

    menuContact.classList.add('menu-active');
    sectionContact.classList.add('active');
    sectionAbout.classList.remove('active');
    footer.classList.add('footer-active');
    slider.classList.add('slide-move');
    sliderText.innerText = sectionContact.getAttribute('id');

    setTimeout(() => {
        slider.classList.remove('slide-move');
    }, 900);
};


// selecting portfolio filter elements
let filterMenu = document.querySelector('.portfolio-filter-menu').children;
let filterItems = document.querySelector('.portfolio-filter-items').children;

// filter portfolio items
for (let i = 0; i < filterMenu.length; i++) {
    filterMenu[i].addEventListener('click', function () {
        for (let j = 0; j < filterMenu.length; j++) {
            filterMenu[j].classList.remove('filter-active');
        }

        this.classList.add('filter-active');

        let attributeValue = this.getAttribute('data-item');

        for (let k = 0; k < filterItems.length; k++) {
            filterItems[k].classList.remove('active-project-contents');
            filterItems[k].classList.add('delete-project-contents');

            if (filterItems[k].getAttribute('data-item') === attributeValue || attributeValue === "all") {
                filterItems[k].classList.add('active-project-contents');
                filterItems[k].classList.remove('delete-project-contents');
            }
        }
    });
}


// selecting project preview box elements
const containerActive = document.querySelector(".container");
const projectPreview = document.querySelector(".portfolio-lightbox");
const previewCategory = document.querySelector("#lightbox-category");
const previewProjectImg = document.querySelector("#lightbox-image");
const closePreview = document.querySelector("#close-lightbox");
const previewShadow = document.querySelector(".portfolio-lightbox-shadow");

// selecting project preview details
const projectTitle = document.querySelector("#project-title");
const projectCategory = document.querySelector("#project-category");
const dateCreated = document.querySelector("#created-date");
const techonology = document.querySelector("#technology-used");
const projectType = document.querySelector("#project-type");
const onlinePreview = document.querySelector("#view-online");

// update project preview info
function addProjectInfo(title, category, date, technology, type, url) {
    projectTitle.textContent = title;
    projectCategory.textContent = category;
    dateCreated.textContent = date;
    techonology.textContent = technology;
    projectType.textContent = type;
    onlinePreview.textContent = url;
}

// filter gallery
for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', function () {
        let getSelectedImage = filterItems[i].querySelector("img").src;
        let getProjectCategory = filterItems[i].getAttribute("data-item");
        let getProjectId = filterItems[i].getAttribute("id");

        previewProjectImg.src = getSelectedImage;
        previewCategory.textContent = getProjectCategory;
        controllScrolling.style.overflow = "hidden";

        // show project preview
        projectPreview.classList.add("show-portfolio-lightbox");
        previewShadow.classList.add("show-portfolio-shadow");
        containerActive.classList.add("container-active");

        // close project preview
        closePreview.onclick = function () {
            projectPreview.classList.remove("show-portfolio-lightbox");
            previewShadow.classList.remove("show-portfolio-shadow");
            containerActive.classList.remove("container-active");
            controllScrolling.style.overflow = "initial";
        }

        // update project preview info
        if (getProjectId === "web1") {
            addProjectInfo("Paperboat Orange", "Web design", "21 Apr, 2021", "Html, Css, Javascript", "Front End", "www.paperboat.com");
        }

        if (getProjectId === "web2") {
            addProjectInfo("Butterfly Blue", "Web design", "14 Mar, 2021", "Javascript", "Front End", "www.butterfly.com");
        }

        if (getProjectId === "web3") {
            addProjectInfo("Butterfly White", "Web design", "03 Jan, 2021", "Bootstrap", "Front End", "www.butterfly.com");
        }

        if (getProjectId === "photo1") {
            addProjectInfo("Flower Image", "Photography", "18 Jan, 2021", "DSLR", "Flower", "www.onlinephoto.com");
        }

        if (getProjectId === "photo2") {
            addProjectInfo("Sky Image", "Photography", "25 Fbr, 2021", "DSLR", "Sky", "www.onlinephoto.com");
        }

        if (getProjectId === "ill3") {
            addProjectInfo("Blackbord Sketch", "Illustration", "08 May, 2021", "Adobe Illustrator", "Clock Sketch", "www.illustrate.com");
        }

        if (getProjectId === "ill1") {
            addProjectInfo("Color template", "Illustration", "07 Mar, 2021", "Adobe Illustrator", "Gradient Color", "www.illustrate.com");
        }

        if (getProjectId === "ill2") {
            addProjectInfo("Pencil Sketch", "Illustration", "22 Apr, 2021", "Adobe Illustrator", "Color Pencil", "www.illustrate.com");
        }
    });
}


// selecting frame colors elements
let switchFrameColors = document.querySelectorAll('.color-main');
let selectFrameColors = document.querySelectorAll('.main-color > span');

// switch frame color
for (let i = 0; i < selectFrameColors.length; i++) {
    selectFrameColors[i].addEventListener('click', () => {
        let getAttrValue = selectFrameColors[i].getAttribute('data-color');
        for (let j = 0; j < switchFrameColors.length; j++) {
            if (switchFrameColors[j].getAttribute('title') === getAttrValue) {
                switchFrameColors[j].removeAttribute('disabled');
            } else {
                switchFrameColors[j].setAttribute('disabled', 'true');
            }
        }
    });
}


// selecting section color elements
let switchSectionColors = document.querySelectorAll('.color-style');
let selectSectionColors = document.querySelectorAll('.style-color > span');

// switch section color
for (let i = 0; i < selectSectionColors.length; i++) {
    selectSectionColors[i].addEventListener('click', () => {
        let getAttrValue = selectSectionColors[i].getAttribute('data-color');
        for (let j = 0; j < switchSectionColors.length; j++) {
            if (switchSectionColors[j].getAttribute('title') === getAttrValue) {
                switchSectionColors[j].removeAttribute('disabled');
            } else {
                switchSectionColors[j].setAttribute('disabled', 'true');
            }
        }
    });
}


// selecting theme swith elements
let themeSwitch = document.querySelectorAll('.theme-switch > input');

// theme switcher
for (let i = 0; i < themeSwitch.length; i++) {
    themeSwitch[i].addEventListener('click', () => {
        if (themeSwitch[i].value === "light") {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    });
}


// selecting style switcher toggle btn elements
let styleSwitcher = document.querySelector('.style-switcher');
let switchBtn = document.querySelector('.switch-toggler');

// toggle style switcher
switchBtn.addEventListener('click', () => {
    styleSwitcher.classList.toggle('show-style-switcher');
});


// selecting menu toggle elements
let toggler = document.querySelector('.toggle-menu');
let toggleBar = document.querySelector('.toggle-bar');
let header = document.querySelector('.header');

// initialize toggle bar status
let isToggleBarActive = false;

// navbar show hide and menu items navigation
toggler.addEventListener('click', function () {

    // navbar show or hide
    if (isToggleBarActive === false) {
        header.classList.add('header-active');
        toggleBar.classList.add('toggle-active');
        controllScrolling.style.overflow = 'hidden';
        isToggleBarActive = true;
    } else {
        header.classList.remove('header-active');
        toggleBar.classList.remove('toggle-active');
        controllScrolling.style.overflow = 'auto';
        isToggleBarActive = false;
    }

    // menu items navigation
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].addEventListener('click', function () {
            header.classList.remove('header-active');
            toggleBar.classList.remove('toggle-active');
            controllScrolling.style.overflow = 'auto';
            isToggleBarActive = false;
        });
    }

    // navbar profile name click actions
    document.querySelector("#my-name").addEventListener('click', function () {
        header.classList.remove('header-active');
        toggleBar.classList.remove('toggle-active');
        controllScrolling.style.overflow = 'auto';
        isToggleBarActive = false;
    });

});