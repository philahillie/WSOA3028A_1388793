const menuItems= [
    {title: "HOME", link: "/index.html"},
    {title: "ABOUT", link: "/about/about.html"},
    {title: "CREATIVE BLOGS", link: "/blogs/blogs.html"}, 
    {title: "THEORY BLOGS", link: "/theory/theory.html"}, 
    {title: "CONTACT", link: "/contact/contact.html"}, 
    
 ];



 window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    renderMenu();
 });
 



 const renderMenu = ()=> {


    let pathPrefix = window.location.pathname === "/WSOA3028A_1388793/" ? './' : '../'




    const navBar = document.querySelector(".menuItems");

   



    
    menuItems.forEach(item =>  {
        
        
        const newItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.href = pathPrefix + item.link; 
        newLink.text = item.title;
        newItem.appendChild(newLink);
        navBar.appendChild (newItem);
    });

 };








