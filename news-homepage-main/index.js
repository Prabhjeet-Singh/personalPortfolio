const Btn=document.querySelector('#btn');
const links=document.querySelector('#links');
const img=document.querySelector('#img');
const newContent=document.querySelector('#new-content');
const readMore=document.querySelector('#read-more');
const listItems=document.querySelectorAll('li');
let pMore=document.querySelector('#p-more');
let read=true;
let text=pMore.textContent;

pMore.textContent=text.slice(0,124)+'...';



for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    var divId = this.getAttribute("data-sec");
    var div = document.getElementById(divId);
    div.classList.add("border");
    setTimeout(function() {
      div.classList.remove("border");
    }, 2000);
  });
}

Btn.addEventListener('click',()=>{
    links.classList.toggle('show-links')
    if(links.classList.contains('show-links')){
        Btn.style.backgroundImage='url(/assets/images/icon-menu-close.svg)'
        links.classList.remove('hide-links')
    }
    else{
        Btn.style.backgroundImage='url(/assets/images/icon-menu.svg)';
        links.classList.add('hide-links')
    }
    
})

readMore.addEventListener('click',()=>{
    if(read){
      readMore.textContent='show less';
      pMore.textContent=text;
      read=false;
    }
    else{
      readMore.textContent='read more';
    pMore.textContent=text.slice(0,124)+'...';
    read=true;
    }
})
window.addEventListener("scroll", function() {
    const newContentRect =newContent.getBoundingClientRect();
    if( !links.classList.contains('show-links')){

        if (newContentRect.top < 55 && newContentRect.bottom > 40 ) {
            Btn.style.backgroundImage ='url(/assets/images/icon-menu-white.svg)';
        }
        else{
            Btn.style.backgroundImage='url(/assets/images/icon-menu.svg)';
        }
    }
  
   
  });

