
        let bgColor=document.getElementsByClassName("bgColor");
        let sdColor=document.getElementsByClassName("sdColor");
        Array.from(bgColor).forEach(function(element,i){
            element.addEventListener("click",function(){
                var elem=getComputedStyle(element);
                let body=document.getElementsByTagName('body');
                body[0].style.backgroundColor=elem.backgroundColor;
            });
        });
        Array.from(sdColor).forEach(function(element,i){
            element.addEventListener("click",function(){
                var elem=getComputedStyle(element);
                let slide=document.getElementsByClassName("slide");
                Array.from(slide).forEach(function(e,i){
                    e.style.backgroundColor=elem.backgroundColor;
                })
                console.log(slide);
            });
        });