const footerItems= [
    {title: "HOME", link: "/index.html"},
    {title: "ABOUT", link: "/about/about.html"},
    {title: "CREATIVE BLOGS", link: "/blogs/blogs.html"}, 
    {title: "THEORY BLOGS", link: "/theory/theory.html"}, 
    {title: "CONTACT", link: "/contact/contact.html"}, 
    
 ];

const footerList = [
    {title: "ADDRESS", text: "10 Somerville Aenue, Melrose Estate"},
    {title: "CONTACT NUMBER", text: "+27 83 707 8350"},
    {title: "EMAIL ADDRESS", text:"milianihousemedia@gmail.com"},
    {title: "INSTAGRAM", link: "https://www.instagram.com/philahillie/"},
    {title: "TWITTER", link: "https://twitter.com/PhilaHillie"},
];

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    renderMenu();
 });

 const renderFooter = ()=> {


    let pathPrefix = window.location.pathname === "/WSOA3028A_1388793/" ? './' : '../'


     const navBar = document.querySelector(".footerItems");

    
    footerItems.forEach(item =>  {
        
        
        const newItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.href = pathPrefix + item.link; 
        newLink.text = item.title;
        newItem.appendChild(newLink);
        navBar.appendChild (newItem);
    });

 };










//$("body").addClass("js"); 

/* Post-document load */ 
//	$(document).ready(function(){ 
		/* Events */ 
//			$("#header").append("<div id='hamburger'>Menu</div>"); 
//			$("#hamburger").click(function(event){ 
//				$("#hamburger").toggleClass("active"); 
//				$("#navigation").toggleClass("active"); 
//				$("#close").toggleClass("active"); 
//				event.preventDefault(); 
//			}); 
//			$("body").append("<div id='close'>Close</div>"); 
//			$("#close").click(function(event){ 
//				$("#hamburger").removeClass("active"); 
//				$("#navigation").removeClass("active"); 
//				$("#close").removeClass("active"); 
//				event.preventDefault(); 
//			}); 
//			$("#page > ul > li > a").click(function(event){ 
//				$("#splash").toggle(); 
//				event.preventDefault(); 
//			}); 
//	});