
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
       },
       768:{
        slidesPerView:2
       },
       1024:{
        slidesPerView:3
      },
    }
 });
 var tablinks=document.getElementsByClassName("tab-links");
var tablinks=document.getElementsByClassName("tab-contents");

function opentab(tabname){
for( tablink of tablinks){
tablink.classList.remove("active-link");
}
for( tabcontent of tabcontents){
tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab");
}
