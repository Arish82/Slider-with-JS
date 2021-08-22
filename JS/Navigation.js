// Targetting Slides and navigation btns
var slides=document.querySelectorAll('.slide');
var btns=document.querySelectorAll('.btn');

// function activationg slides and btns
function activing(i){
    slides.forEach(slide=>{
        slide.classList.remove('active');
    });
    btns.forEach(slide=>{
        slide.classList.remove('active');
    });
    slides[i].classList.add('active');
    btns[i].classList.add('active');
    return i;
}

// Adding Event listeners to every navigation button
let c;
btns.forEach(function(btn,i){
    btn.addEventListener("click",function(){
        c=activing(i);
    });
});

// adding animation
function repeat(){
    // targetting active btns and class
    let active=document.getElementsByClassName('active');
    // current active slide and btns
    let i=1;
    
    // animation function to be repeated every 10s to form animation
    function repeater(){
        setTimeout(function(){
            // removing active from all the slides and btns
            slides.forEach(slide=>{
                slide.classList.remove('active');
            });
            btns.forEach(slide=>{
                slide.classList.remove('active');
            });


            if(c!=undefined){
                i=c;
                c=undefined;
            }
            
            // adding active class to the next slide and btn
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            // incrementing for next slide and btn
            i++;
            if(i==slides.length){
                i=0;
            }
            
            if(i>=slides.length){
                return;
            }
            repeater();
        },7000);
    }
    repeater();
}
repeat();

// arrow navigation
let arrow=document.getElementsByClassName('Arrow');
arrow[0].addEventListener("click",function(){
    for(var i=0;i<slides.length;i++){
        if(btns[i].className=="btn active"){
            btns[i].classList.remove("active");
            slides[i].classList.remove("active");
            i--;
            if(i==(-1)){
                i=slides.length-1;
            }
            btns[i].classList.add("active");
            slides[i].classList.add("active");
            c=i;
            break;
        }
    }
});
arrow[1].addEventListener("click",function(){
    for(var i=0;i<slides.length;i++){
        if(btns[i].className=="btn active"){
            btns[i].classList.remove("active");
            slides[i].classList.remove("active");
            i++;
            if(i==slides.length){
                i=0;
            }
            btns[i].classList.add("active");
            slides[i].classList.add("active");
            c=i;
            break;
        }
    }
});
