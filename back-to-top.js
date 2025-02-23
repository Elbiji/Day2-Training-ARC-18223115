const backToTopButton = document.querySelector("#back-to-top");


window.addEventListener("scroll", scrollFunction);

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

backToTopButton.addEventListener("click", backToTop);

function backToTop () {
    window.scrollTo({top: 0, behavior: "smooth"});
}