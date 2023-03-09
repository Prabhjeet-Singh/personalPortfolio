const Btn=document.querySelector('#btn')
const links=document.querySelector('#links')
Btn.addEventListener('click',()=>{
    links.classList.toggle('show-links')
    if(links.classList.contains('show-links')){
        Btn.style.backgroundImage='url(/assets/images/icon-menu-close.svg)'
        Btn.style.position="fixed"
        links.classList.add('show-links')
        links.classList.remove('hide-links')

       
    }
    else{
        Btn.style.backgroundImage='url(/assets/images/icon-menu.svg)';
        Btn.style.position="block"

        links.classList.remove('show-links')
        links.classList.add('hide-links')


    }
    
})

// window.addEventListener('resize',()=>{
//     if(window.innerWidth >=640){
//         links.style.display='flex'
//         console.log('h');
//     }
//     else{
//         links.style.display=show;

//     }
// })