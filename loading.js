gsap.fromTo(".loading-page", 
    {opacity: 1}, 
    {
    opacity:0,
    duration: 1.5,
    delay: 3.5
}
);

gsap.fromTo(
    ".logo-name",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
    }
)

// window.onload = function(){
//     // document.getElementById("loader").style.display="none";
//     document.getElementById("content").style.display="block";
// };

var loader = document.getElementById("loader");

// window.addEventListener("load", function(){
//     // loader.style.display = "none";
//     // document.getElementById("content").style.display="block";
// })

setTimeout(function() {
    loader.style.display = "none";
}, 8000); 
// 8000

setTimeout(function() {
    loader.style.display = "none";
    document.getElementById("content").style.display="block";
}, 3300);
// 3300