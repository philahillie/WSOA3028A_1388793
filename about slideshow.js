const 

const i=0; 
const images = [];
const time = 3000;

// image list

const gallery = [
images[0]= "./images/character rationale.png",
images[1]= "./images/exhibition poster.png",
images[2]= "./images/MEDIUM IS THE MESSAGE.png",
]

//function to change image 
function changeImg(){
    document.slide.src = images[i];

    if (i< images.length - 1 ){
        i++;
    } else {
        i=0;
    }

    setTimeout("changeImg()", time);

}
window.onload =changeImg

const renderGallery =  ()=> {
    const slideShow = document.querySelector.Selector("gallery");
    gallery.forEach (item => {
        const newImage = document.createElement ("li"); 
        const newLink = document.createElement ("ul");
        const newSlide = document.createElement("section");

        newImage.appendChild(newLink);
        newLink.appendChild(newSlide);
    });
    
};