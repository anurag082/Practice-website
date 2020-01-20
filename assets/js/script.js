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


//===================== login =================
var userlogin = document.querySelector(".loginform");
document.querySelector("[title=LogIn]").addEventListener('click',function() {
  userlogin.style.display="block";
})

var user = [
  {
    useremail:"demo@gmail.com",
    password:"1234"
  },
  {
    useremail:"demo1@gmail.com",
    password:"12345"
  },
  {
  useremail:"demo2@gmail.com",
  password:"12346"
  }
]

function getinfo() {
  var email = document.querySelector("[name=email]").value,
  pass=document.querySelector("[name=password]").value;
  for(i=0;i<user.length;i++) {
    if(email===user[i].useremail && pass===user[i].password) {
      console.log("loggedin")
      return
    }
  }
  document.querySelector(".warning").innerHTML="sda"
  console.log("no")
}
document.querySelector(".sub").addEventListener('click',function(e){
e.preventDefault();
getinfo();
})




















