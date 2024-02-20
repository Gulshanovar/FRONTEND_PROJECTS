var strange = document.querySelector("h3")

var Addfriend = document.querySelector("#Add")
var Removefriend = document.querySelector("#Remove")

Addfriend.addEventListener("click",function()
{
    strange.innerHTML="FRIENDS"
    strange.style.color="GREEN"
})

Removefriend.addEventListener("click",function()
{
    strange.innerHTML="STRANGER"
    strange.style.color="RED"
})


