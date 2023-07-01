let profileMenu = document.getElementById("profileMenu")

function toggleMenu(){
    profileMenu.classList.toggle("open-menu")
}
let sidebarActivity  = document.getElementById("sidebar")
let showMore = document.getElementById("showmore")

function  showActivity(){
    sidebarActivity.classList.toggle("open-activity");
    if(sidebarActivity.classList.contains("open-activity")){
        showMore.innerHTML="show less <b>-</b>"
    }else{
        showMore.innerHTML="show more <b>+</b>"
    }
}