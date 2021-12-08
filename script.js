document.addEventListener('scroll',function(){
       if(scrollY>200){
           document.getElementById("navbar").style.backgroundColor = "#0000c4";
       }
       else{
        document.getElementById("navbar").style.backgroundColor = "";
       }
})


edu = document.getElementById("card");
edu.addEventListener('mouseenter',function(event){
        document.getElementById("logo").style.boxShadow = "10px 10px 10px 10px #d2d8d6";
    
})

// on mouseleave
edu = document.getElementById("card");
edu.addEventListener('mouseleave',function(event){
        document.getElementById("logo").style.boxShadow = "";
    
})

edu = document.getElementById("card2");
edu.addEventListener('mouseenter',function(event){
        document.getElementById("logo2").style.boxShadow = "10px 10px 10px 10px #d2d8d6";
    
})
// on mouseleave
edu = document.getElementById("card2");
edu.addEventListener('mouseleave',function(event){
        document.getElementById("logo2").style.boxShadow = "";
    
})

edu = document.getElementById("card3");
edu.addEventListener('mouseenter',function(event){
        document.getElementById("logo3").style.boxShadow = "10px 10px 10px 10px #d2d8d6";
    
})
// on mouseleave
edu = document.getElementById("card3");
edu.addEventListener('mouseleave',function(event){
        document.getElementById("logo3").style.boxShadow = "";
    
})


//js on contact




cont = document.getElementById("address");
cont.addEventListener('mouseenter',function(event){
        document.getElementById("logoC").style.boxShadow = "10px 10px 10px 10px #93b1bf";
    
})

// on mouseleave
cont = document.getElementById("address");
cont.addEventListener('mouseleave',function(event){
        document.getElementById("logoC").style.boxShadow = "";
    
})

cont = document.getElementById("phone");
cont.addEventListener('mouseenter',function(event){
        document.getElementById("logoC1").style.boxShadow = "10px 10px 10px 10px #c7c7bd";
    
})
// on mouseleave
cont = document.getElementById("phone");
cont.addEventListener('mouseleave',function(event){
        document.getElementById("logoC1").style.boxShadow = "";
    
})

cont = document.getElementById("email");
cont.addEventListener('mouseenter',function(event){
        document.getElementById("logoC2").style.boxShadow = "10px 10px 10px 10px #c7c7bd";
    
})
// on mouseleave
cont = document.getElementById("email");
cont.addEventListener('mouseleave',function(event){
        document.getElementById("logoC2").style.boxShadow = "";
    
})

cont = document.getElementById("website");
cont.addEventListener('mouseenter',function(event){
        document.getElementById("logoC3").style.boxShadow = "10px 10px 10px 10px #c7c7bd";
    
})
// on mouseleave
cont = document.getElementById("website");
cont.addEventListener('mouseleave',function(event){
        document.getElementById("logoC3").style.boxShadow = "";
    
})


//Get the button

let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function()
{scrollfunction()};

function scrollfunction(){
if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        myButton.style.display = "block";
}
else{
        myButton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document

function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}








