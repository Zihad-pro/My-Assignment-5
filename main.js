 document.getElementById("bg-change").addEventListener("click", function () {
            const colors = ["peru","black","pink","orange","blue", "green", "yellow", "red", "purple","gray","deeppink"];
            let bodyHead = document.getElementById("bodyHead");
            let currentColor = bodyHead.style.backgroundColor;

            let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length] || colors[0];
            bodyHead.style.backgroundColor = nextColor;
        });
document.getElementById("item-2").addEventListener("click",function(){
window.location.href="page2.html";


})