const nav = document.querySelector(".navbar");
const sec2 =document.querySelector(".sec2");
const modalbox = document.querySelector(".show_home_menue");
const imges = Array.from(document.querySelectorAll(".card_img"));
const modalimg =document.querySelector(".home_menu_img");
const next =document.querySelector(".next_prod");
const prev =document.querySelector(".prev_prod");
const close_btn =document.querySelector(".close_modal");

console.log(next, prev, close);
let currentindex;
let modalflag ;

function show_modal (){
modalbox.classList.add("on_show");
modalflag=true;
}
function nextprod (){
 if(currentindex < imges.length -1){
  currentindex++;
 }else{currentindex=0;}
  modalimg.setAttribute("src", imges[currentindex].getAttribute("src"));
}
function prevprod (){
 if(currentindex > 0){
  currentindex--;
 }else{currentindex = imges.length-1;}
  modalimg.setAttribute("src", imges[currentindex].getAttribute("src"));
}
function close (){
  modalflag = false;
  modalbox.classList.remove("on_show");
}
window.onscroll=(e)=>{

     if (window.scrollY >= (sec2.offsetTop-100 )) {
    nav.classList.add("chng_col");
    nav.classList.remove("hero_sec_bg");
  } else {
    nav.classList.remove("chng_col");
    nav.classList.add("hero_sec_bg");
  }
};

imges.forEach((img) => {
  img.addEventListener("click", (e)=>{
    console.log(e);
    currentindex= imges.indexOf(e.target);
    console.log(currentindex);
    show_modal();
    modalimg.setAttribute("src", e.target.getAttribute("src"));
  })

}
)

next.addEventListener("click", nextprod );
prev.addEventListener("click", prevprod );
close_btn.addEventListener("click", close );

document.onkeydown = (e)=>{
  console.log(e);
  if(e.code == "ArrowRight") {nextprod();}
  else if(e.code == "ArrowLeft") {prevprod();}
  else if (e.code == "Escape") {close();}
}

document.addEventListener("click", (e)=>{
  if(modalflag && e.target.classList.contains("on_show")){
    close();
  }
})

