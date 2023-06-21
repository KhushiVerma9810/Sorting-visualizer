// let s = document.querySelector("input");
// let size = document.getElementById("sliderange");
// const randomarray =async(10)=>{
//     let randomArray=Array.from({length: size}, () => Math.floor(Math.random() * 100));
//     console.log(randomArray) ;
// }

// document.querySelector(".slider").addEventListener("change", RenderScreen);



//  let s = document.querySelector("input");
//  let size = document.getElementById("sliderange");

//  arraysize =()=>{
//  var randomArray = [];
// for (let i=1, j=size; i<j; i++) {
//     randomArray.push(Math.floor(Math.random() * 100))
// }
// console.log(randomArray)
// }
 
//  let randomArray=Array.from({length: size}, () => Math.floor(Math.random() * 100));
//  console.log(randomArray) ;
// const ARRAY_LENGTH = 10
// const randomArray = []
// for(let i = 0; i<ARRAY_LENGTH; i++) {randomArray.push(Math.random())}

// var size =document.getElementById('sliderrange'),array_size= sliderrange.value;
// var generate = document.getElementById("generate");
// generate.addEventListener("click",generate_array);
// size.addEventListener("input",update_array_size);
// function generate_array()
// {
//     cont.innerHTML="";

//     for(var i=0;i<array_size;i++)
//     {
//         div_sizes[i]=Math.floor(Math.random() * 0.5*( size.max - size.min) ) + 10;
//         divs[i]=document.createElement("div");
//         cont.appendChild(divs[i]);
//         margin_size=0.1;
//         divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
//     }
// }

// function update_array_size()
// {
//     array_size=size.value;
//     generate_array();
// }

// window.onload=update_array_size();


let size = document.getElementById('#sliderrange');
let arraysize = size.value;
let array = [];
let sortedArray = [];

let min = 1;
let max = 100;

generateArray();

function generateArray() {
	for(var i = 0; i <arraysize; i++) {
		array[i] = generateArrayValue(min, max);
		
		if(array[i] == array[i - 1]) {
			array[i] = generateArrayValue(min,max);
		}
	}
}

function generateArrayValue() {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log("Randomly generated array: ");
console.log(array);
