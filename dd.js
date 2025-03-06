let menu_btn = document.querySelectorAll(".menu_btn")
let card_btn = document.querySelectorAll(".card_btn")
let card = document.querySelector(".card")
let close_card = document.querySelector (".close_card")
for(let i=0; i<card_btn.length; i+=1  ){
    card_btn[i].addEventListener('click', zoom_card )
}
for(let x=0; x<close_card.length; x+=1  ){
    close_card[x].addEventListener('click', closecard)
}
function zoom_card(){
card.style.width='1200px'
close_card.style.display='flex'
}
function closecard(){
    close_card.style.display='none'
    card.style.width='280px'
    console.log('sdwds')
    }
