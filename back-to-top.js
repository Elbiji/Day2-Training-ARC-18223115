const backToTopButton = document.querySelector("#back-to-top");
window.addEventListener("scroll", scrollFunction);
// this window event listener will fire the function when we scroll our mouse and evaluate the situation through the scrollfunction
backToTopButton.addEventListener("click", backToTop);
// this also listens the mouse click that has been added to the back to top button and fire the backtotop function

function scrollFunction () {
    if (window.pageYOffset > 300){ 
        if(!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    } else {
        if(backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.add("btnExit");
            backToTopButton.classList.remove("btnEntrance")
            setTimeout(() => {
                backToTopButton.style.display = "none";
            }, 250)
        }
    }
}


function backToTop () {
    window.scrollTo({top: 0, behavior: "smooth"});
}