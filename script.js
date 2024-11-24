const scroll = 150;
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if(currentScroll <= scroll){
        opacity = 1 - currentScroll / scroll;
        height = 150 - 150 * currentScroll / scroll;
        marginleft = -75 + 75 * currentScroll / scroll;
    }else{
        opacity = 0;
        height = 0;
    }
    var logo = document.getElementById("logo").style;
    logo.opacity = opacity;
    logo.height = height;
    logo.marginLeft = marginleft;
});