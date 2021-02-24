let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// untuk sidenav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// untuk parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax)

// untuk navbar
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>710){
            $('nav').addClass('green');
        }else{
            $('nav').removeClass('green');
        }
    });
});