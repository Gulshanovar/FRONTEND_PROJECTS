var strange = document.querySelector("h3")

var btn = document.querySelector("#Add")
var check=0


btn.addEventListener("click",function()
{
    if(check==0){
        strange.innerHTML="FRIENDS"
        strange.style.color="green"
        btn.innerHTML="REMOVE FRIEND"
        check=1
    }
    else{
        strange.innerHTML="STRANGER"
        strange.style.color="red"
        btn.innerHTML="ADD FRIEND"
        check=0
    }
    
})



