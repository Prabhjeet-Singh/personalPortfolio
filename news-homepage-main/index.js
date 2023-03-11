const Btn=document.querySelector('#btn');
const links=document.querySelector('#links');
const img=document.querySelector('#img');
const newContent=document.querySelector('#new-content');

Btn.addEventListener('click',()=>{
    links.classList.toggle('show-links')
    if(links.classList.contains('show-links')){
        Btn.style.backgroundImage='url(/assets/images/icon-menu-close.svg)'
        links.classList.add('show-links')
        links.classList.remove('hide-links')

       
    }
    else{
        Btn.style.backgroundImage='url(/assets/images/icon-menu.svg)';
        // Btn.style.position="block"

        links.classList.remove('show-links')
        links.classList.add('hide-links')


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


// window.addEventListener('resize',()=>{
//     if(window.innerWidth >=640){
//         links.style.display='flex'
//         console.log('h');
//     }
//     else{
//         links.style.display=show;

//     }
// })