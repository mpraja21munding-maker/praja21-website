const slider = document.querySelector(".gallery-slider");

if(slider){

setInterval(()=>{

slider.scrollBy({

left:400,

behavior:"smooth"

});

if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth-5){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

},4000);

}
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});