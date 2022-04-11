/*=============== CLICK AUDIO ===============*/
var mySong = document.getElementById("mySong"); 
var icon = document.getElementById ("icon-play");
mySong.onended = function() {
    mySong.pause ();
    icon.className = "fa-solid fa-volume-high";
    Swal.fire({
        title: "Armstrong Bui",
        text: "Thanks for listening to me!",
        type: "info",
        confirmButtonColor: 'hsl(352, 75%, 60%)',
        confirmButtonText: 'OK'
    });
};
icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.className = "fa-solid fa-pause";
    }
    else{
        mySong.pause ();
        icon.className = "fa-solid fa-play";
    }
};
/*=============== SHOW MENU ===============*/
const navList = document.getElementById("nav-list");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener('click',() => {
        navList.classList.add("show-menu")
    })
}

/*============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click',() => {
        navList.classList.remove("show-menu");
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link");
function linkAction(){
    navList.classList.remove("show-menu");
}
navLinks.forEach(n => n.addEventListener('click', linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
    if(this.scrrollY >= 80){
        header.classlist.add('scroll-header');
    }else{
        header.classList.remove("scroll-header");
    } 
} 
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const sectionHeader = document.querySelector('.sectionHeader');
window.addEventListener("scroll", navHightlighter);
function navHightlighter(){
    let scrollY = window.pageYOffset;
   
    sections.forEach(current => {
        const sectionHeight =  current.offsetHeight;
        const sectionTop = current.offsetTop-150;
        const sectionId = current.getAttribute("id");
        
        if(scrollY <10){
            document.querySelector('.sectionHome').classList.add("active-link")
        }
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.sectionHome').classList.remove("active-link")
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })

}
/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterConatiner = document.querySelector('.portfolio-filter-inner');
const filterBtns = filterConatiner.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalPortfolioItem = portfolioItems.length;

for(let i=0; i< totalFilterBtn;i++){
    filterBtns[i].addEventListener('click', function(){
        filterConatiner.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute("data-filter");
        for(let k=0; k< totalPortfolioItem;k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
            else{
                portfolioItems[k].classList.add('hide');
                portfolioItems[k].classList.remove('show');
            }
            if(filterValue === "all"){
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            }
        }
    })
}




/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.getElementById("theme-button");
const themeModal = document.querySelector(".customize-theme");

//open  Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// close Modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }   
}
theme.addEventListener('click',openThemeModal);
themeModal.addEventListener('click',closeThemeModal);

/*===== FONTS =====*/
const fontSizes = document.querySelectorAll('.choose-size span');
const  removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click',() =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '17px';
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})
/*===== PRIMARY COLORS =====*/
const colorPalettes = document.querySelectorAll('.choose-color span');
var root = document.querySelector(":root")
const  removeColorSelector = () => {
    colorPalettes.forEach(color => {
        color.classList.remove('active');
    })
}
colorPalettes.forEach(color => {
    color.addEventListener('click',() =>{
        removeColorSelector();
        let primaryHue;
        color.classList.toggle('active');

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue =  202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
/*===== THEME BACKGROUNDS =====*/
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () =>{
    lightColorLightness = '92%';
    whiteColorLightness = '100%';
    darkColorLightness = '17%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    changeBg();
})
bg2.addEventListener('click', () =>{
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBg();
})
bg3.addEventListener('click', () =>{
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';
    
    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    changeBg();
})


/*===== Scroll Reveal Effects =====*/
// ScrollReveal({
//   reset: true,
//   distance: "50px",
//   duration: 2500,
//   delay: 200,
// });
// ScrollReveal().reveal(".section-title", {
//   delay: 150,
//   origin: "left",
// });
// ScrollReveal().reveal(".about-img", {
//   delay: 100,
//   origin: "bottom",
// });
// ScrollReveal().reveal(".home", {
//   delay: 150,
//   origin: "top",
// });
// ScrollReveal().reveal(".about-content", {
//   delay: 100,
//   origin: "right",
// });
