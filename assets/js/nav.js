const nav = document.querySelector(".navbar");

window.onscroll=(e)=>{

     if (window.scrollY >= 300) {
    nav.classList.add("chng_col");
  } else {
    nav.classList.remove("chng_col");
    
  }
};