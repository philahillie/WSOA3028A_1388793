
const menuItems= [
    {title: "About", link: "./about/about.html"},
    {title: "Blogs", link: "./blogs/blogs.html"}, 
    {title: "Home", link: "../index.html"}, 
];

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    renderMenu();
});
console.log ("Hello World");



const renderMenu = ()=> {
    const navBar = document.querySelector(".menuItems");
    menuItems.forEach(item => {
        const newItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.href = item.link; 
        newLink.text = item.title;
        newItem.appendChild(newLink);
        navBar.appendChild (newItem);
    });
};

