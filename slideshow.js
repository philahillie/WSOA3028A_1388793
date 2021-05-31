const carouselSlide = document.querySelector(".carouselSlide");
const carouselImage =document.querySelector(".carouselSlide img");

const carouselSlide =[
    {Object: "images", link: "./images/roses.jpg"},
    {Object: "images", link: "./images/bw portrait.jpg"},
    {Object: "images", link: "./images/portrait.jpg"},

];

//buttons
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

//counter
let counter = 1;
const size= carouselImage[0].active;

carouselSlide.style.transform = "translateX(" + (-size * counter)+ "px)";

//button listeners

nextButton.addEventListener('click',()=>{
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter)+ "px)";

});

prevButton.addEventListener('click',()=>{
    if(counter <= 0 ) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';
    
});

coarouselSlide.addEventListener('transitionend',()=> {
    if(carouselImages[counter].class===lastClone){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';   
    }
    if(carouselImages[counter].class===firstClone){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';   
    }
});
