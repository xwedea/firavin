function navbarAnimation(){
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener("click",function(){
        nav.classList.toggle("nav-active");
        
        navLinks.forEach((item,index)=>{
            if(item.style.animation){
                item.style.animation = "";
            }else{
                item.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.1}s`
            }
        });
        burger.classList.toggle("toggle");
    });
}

navbarAnimation();