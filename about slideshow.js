
// image slide show as seen on Traversy Media


let i=0; 
let images = [];
let time = 2000;

// image list

images[0]= './images/all white.jpg';
images[1]= './images/blooming.jpg';
images[2]= './images/studio.jpg';
// images[3]= './images/portrait.jpg';



//function to change image 
function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1 ){
        i++;
    } else {
        i=0;
    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg;

//console.log()

//const renderGallery =  ()=> {
    //const slideShow = document.querySelector.selector("carouselSlide");
    //gallery.forEach (item => {
    //    const newImage = document.createElement ("li"); 
    //    const newLink = document.createElement ("ul");
    //    const newSlide = document.createElement("section");

    //    newImage.appendChild(newLink);
    //    newLink.appendChild(newSlide);
    //});
    
//};

