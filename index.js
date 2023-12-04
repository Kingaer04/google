let menu = document.querySelector(".visi");

function visibility(){
    if (menu.classList.contains("nonvisi")){
        menu.classList.remove("nonvisi")
        document.getElementById("menu-icon").classList.remove("active")
    }
    else{
        menu.classList.add("nonvisi");
        document.getElementById("menu-icon").classList.add("active")
    }
}

document.getElementById("menu-icon").addEventListener("click", visibility)

