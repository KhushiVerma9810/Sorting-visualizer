let size=document.querySelector('#sliderrange');
size.addEventListener('input', function(){
    generateBars(parseInt(size.value))});
    generateBars();

    let time= 100;
let sortspeed=document.querySelector('#speed');
sortspeed.addEventListener('input',function(){
    time=245-parseInt(sortspeed.value);
});

function generateBars(noBar=10){
document.getElementById("bars").innerHTML='';
let bars=[]; 
for(let i=0; i<noBar; i++)
{
    bars.push(Math.floor(Math.random()*300));
}

const divs =document.querySelector('#bars');

for(let x=0; x<noBar; x++)
 {
    const need =document.createElement("div");
    need.classList.add('sort');
    need.classList.add('item');
    need.style.height=bars[x]+"px";
    divs.append(need);
 }
}

document.getElementById("generate").addEventListener("click",function(){
    generateBars(size.value);
    enablesortselect();
    enablesize();
});
function disablesize(){
    document.getElementById('sliderrange').disabled =true;
} 
function disablesortselect(){
    document.getElementById('sorting').disabled = true;
}
function enablesortselect() {
    document.getElementById('sorting').disabled =false;   
}
function enablesize() {
    document.getElementById('sliderrange').disabled = false;
}
function swap(e1 , e2){
    let temp = e1.style.height;
    e1.style.height = e2.style.height;
    e2.style.height = temp;
}
function delay(milisecond){
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisecond); 
    }) 
}