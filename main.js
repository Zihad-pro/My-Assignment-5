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

// Dynamic time
const now = new Date();
const dayName = now.toLocaleDateString('en-US',{weekday:'long'})
const monthName = now.toLocaleDateString('en-US', { month: 'short' });
const day=now.getDate();
const year = now.getFullYear();
document.getElementById('Dynamic-time').innerHTML=`${dayName}, <br>  ${monthName} ${day}  ${year} `;
document.getElementById('Dynamic-time').style.fontWeight="bold";

// active log
// btn 1
document.getElementById('btn1').addEventListener('click',function(){
    alert("Board updated Successfully");
    document.getElementById('btn-box1').style.display='block';
document.getElementById('btn1').disabled=true;
document.getElementById('btn1').style.background='lightgray';
document.getElementById('btn1').style.cursor='default';
const now=new Date();
const hour=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();
const timeString = `${hour}:${minutes}:${seconds}`;
document.getElementById('box1-s').innerText = ` at ${timeString}`;
const task=document.getElementById('task').innerText;
ConvertedTask=parseFloat(task);
console.log(typeof ConvertedTask);
if(task>1){
   const sum=ConvertedTask-1;
   document.getElementById('task').innerText=sum;

}
else{
    alert("congress you have completed all task")
}


});

// btn 2
document.getElementById('btn2').addEventListener('click',function(){
    alert("Board updated Successfully");
    document.getElementById('btn-box2').style.display='block';
document.getElementById('btn2').disabled=true;
document.getElementById('btn2').style.background='lightgray';
document.getElementById('btn2').style.cursor='default';
const now=new Date();
const hour=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();

const timeString = `${hour}:${minutes}:${seconds}`;
document.getElementById('box2-s').innerText = ` at ${timeString}`;
const task=document.getElementById('task').innerText;
ConvertedTask=parseFloat(task);
console.log(typeof ConvertedTask);
if(task>1){
   const sum=ConvertedTask-1;
   document.getElementById('task').innerText=sum;

}
else{
  alert("congress you have completed all task")
}



})
// btn 3
document.getElementById('btn3').addEventListener('click',function(){
    alert("Board updated Successfully");
    document.getElementById('btn-box3').style.display='block';
document.getElementById('btn3').disabled=true;
document.getElementById('btn3').style.background='lightgray';
document.getElementById('btn3').style.cursor='default';
const now=new Date();
const hour=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();

const timeString = `${hour}:${minutes}:${seconds}`;
document.getElementById('box3-s').innerText = ` at ${timeString}`;

const task=document.getElementById('task').innerText;
ConvertedTask=parseFloat(task);
console.log(typeof ConvertedTask);
if(task>1){
   const sum=ConvertedTask-1;
   document.getElementById('task').innerText=sum;

}
else{
     alert("congress you have completed all task")
}


})
// btn 4
document.getElementById('btn4').addEventListener('click',function(){
    alert("Board updated Successfully");
    document.getElementById('btn-box4').style.display='block';
document.getElementById('btn4').disabled=true;
document.getElementById('btn4').style.background='lightgray';
document.getElementById('btn4').style.cursor='default';
const now=new Date();
const hour=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();

const timeString = `${hour}:${minutes}:${seconds}`;
document.getElementById('box4-s').innerText = ` at ${timeString}`;
const task=document.getElementById('task').innerText;
ConvertedTask=parseFloat(task);
console.log(typeof ConvertedTask);
if(task>1){
   const sum=ConvertedTask-1;
   document.getElementById('task').innerText=sum;

}
else{
   alert("congress you have completed all task")
}


})
// btn 5
document.getElementById('btn5').addEventListener('click',function(){
    alert("Board updated Successfully");
    document.getElementById('btn-box5').style.display='block';
document.getElementById('btn5').disabled=true;
document.getElementById('btn5').style.background='lightgray';
document.getElementById('btn5').style.cursor='default';
const now=new Date();
const hour=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();

const timeString = `${hour}:${minutes}:${seconds}`;
document.getElementById('box5-s').innerText = ` at ${timeString}`;
const task=document.getElementById('task').innerText;
ConvertedTask=parseFloat(task);
console.log(typeof ConvertedTask);
if(task>1){
   const sum=ConvertedTask-1;
   document.getElementById('task').innerText=sum;

}
else{
    alert("congress you have completed all task")
}


})
// btn 6
document.getElementById('btn6').addEventListener('click',function(){
    alert("Board updated Successfully");
    document.getElementById('btn-box6').style.display='block';
document.getElementById('btn6').disabled=true;
document.getElementById('btn6').style.background='lightgray';
document.getElementById('btn6').style.cursor='default';
const now=new Date();
const hour=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();

const timeString = `${hour}:${minutes}:${seconds}`;
document.getElementById('box6-s').innerText = ` at ${timeString}`;

const task=document.getElementById('task').innerText;
ConvertedTask=parseFloat(task);
console.log(typeof ConvertedTask);
if(task>1){
   const sum=ConvertedTask-1;
   document.getElementById('task').innerText=sum;

}
else{
    alert("congress you have completed all task")
}



})

// clear history
document.getElementById('clear-history').addEventListener('click',function(){
document.getElementById('add-btn').style.display='none';


})



