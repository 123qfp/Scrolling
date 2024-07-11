let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let elephant=document.getElementById('panda');
let hill5 = document.getElementById('hill5');
let sun=document.getElementById('sun')



window.addEventListener('scroll',()=>{
    let val=window.scrollY;


    text.style.marginTop=val * 2.5+'px';
    leaf.style.top=val *-1.5+'px';
    leaf.style.left=val *1.5+'px';
    hill5.style.left=val *1.5+'px';
    elephant.style.left=val*-1.3+'px';
    hill4.style.left=val *-1.5+'px';
    hill4.style.left=val *1.5+'px';
    hill1.style.right=val *1+'px';
    sun.style.top=val* -2.5+'px';
 
    
       

});