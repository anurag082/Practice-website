var lefts = document.querySelector(".arrow-left"),
rights = document.querySelector(".arrow-right"),
slides = document.querySelector(".slider"),
images = document.querySelectorAll(".slides"),
dots = document.querySelectorAll(".dot"),
icon = document.querySelector(".hamburgericon"),
menu = document.querySelector(" nav"),
index=0;

/*=============================================================
Slider
=============================================*/

dots.forEach(function(item,index)
{
item.addEventListener("click",function(){
  sliding(index) // to pass the current index of image
  })
})
lefts.addEventListener("click",function() {
  index = (index<=0)?images.length-1:index-1; // to set the index value on left click
  sliding(index)
});
rights.addEventListener("click",function() {
  index = (index>=images.length-1)?0:index+1; // to set the index value on right click
  sliding(index)
});
function sliding(n)
{
  document.querySelector('.dot-active').classList.remove('dot-active');
  dots[n].classList.add("dot-active");
  slides.style.transform = 'translateX(' + n * -100 + '%)'; 
}


//=========================== Scroll to top =======================
document.querySelector(".topToScroll").addEventListener("click",function(){
  document.documentElement.scrollTop = 0;
})





















