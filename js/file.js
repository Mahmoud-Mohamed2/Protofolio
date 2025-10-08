let span = document.querySelector(".top");

window.onscroll = function(){

if(this.scrollY >= 1000) {
    span.classList.add("show");

}else{
    span.classList.remove("show");
}
};

