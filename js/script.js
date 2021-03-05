// untuk opening
const gambar = document.querySelector('.container img');
const headerangga = document.querySelector('.container h3');
const headerangga2 = document.querySelector('.container p');

$(window).on("load",function(){
    $(gambar).css({
        "transform" : "scale(1)",
        "opacity" : 1
    })
    setTimeout(function() {

        $(headerangga).css({
            "transform" : "translate(0,0)",
            "opacity" : 1
        })
        $(headerangga2).css({
            "transform" : "translate(0,0)",
            "opacity" : 1
        })


    },  1500)
})

// untuk loading
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
            $('nav').addClass('grey');
        }else{
            $('nav').removeClass('grey');
        }
    });
});

// untuk navbar2
window.addEventListener('scroll', function(){
    let header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 710);
});

