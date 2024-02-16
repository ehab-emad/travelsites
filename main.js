let key=document.querySelector("#search-btn")
let form=document.querySelector(".search-form")
let mid=document.querySelector(".mid")
let form2=document.querySelector(".login-form")
let menu1=document.querySelector("#menu")
let cir=document.querySelectorAll(".video-btn")
function showbar(){
    form.classList.toggle("active")
    key.classList.toggle("fa-times")
 }function showform(){
    form2.classList.add("active")

}
function stop(){
    form2.classList.remove("active")
}
function menu(){
    mid.classList.toggle("active")
    menu1.classList.toggle("fa-times")
}
cir.forEach(index=>{
   index.addEventListener("click",function(){
        document.querySelector(".video-btn.blue").classList.remove("blue")
        index.classList.add("blue")
        let src=index.getAttribute("data-src");
      document.querySelector("#video-slider").src=src;
    })
})