
// image slide show as seen on Traversy Media

//alert('here')

let i=0; 
let images = [];
let time = 2500;

// image list

images[0]= '/images/all white.jpg';
images[1]= '/images/blooming.jpg';
images[2]= '/images/studio.jpg';
// images[3]= './images/portrait.jpg';

//let images = ['./images/all white.jpg','./images/blooming.jpg','./images/studio.jpg']
//images.forEach(element => {
//    console.log ('it works', element);
//});

//for (const image in images)



//function to change image 
function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1 ){
        i++;
    } else {
        i=0;
    }

    setInterval("changeImg()", time);

}

window.addEventListener ('DOMContentLoaded', (_images) => {

     let pathPrefix = '';

     if (window.location.pathname === '/WSOA3028_1388793/index.html')
     pathPrefix = './'

     else 
     pathPrefix = '../';



    console.log ('DOM fully loaded and parsed');
    changeImg();
});

for (let step = 0; step < 3; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(changeImg);
  }

window.onload = changeImg ;




// window.addEventListener('DOMContentLoaded', (event) => {
   //  console.log('DOM fully loaded and parsed');
    // renderMenu();
 // });

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

