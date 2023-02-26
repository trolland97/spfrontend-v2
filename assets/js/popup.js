window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            const body = document.querySelector("body");
            if (!document.querySelector(".popup").classList.contains("hidden")) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "auto";
            }
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
});

document.querySelector("#continue").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
});