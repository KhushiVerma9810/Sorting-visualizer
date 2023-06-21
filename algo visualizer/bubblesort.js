async function bubblesort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length - i-1; j++){

            arr[j].style.background='red';
        arr[j+1].style.background='red';

        if(parseInt(arr[j].style.height)>(parseInt(arr[j+1].style.height))){
            await delay(time);

           swap(arr[j] , arr[j+1]);

        }
        arr[j].style.background='yellow';
        arr[j+1].style.background='yellow';
        }
        arr[arr.length-i-1].style.background='green';
    }
    arr[0].style.background='green';
}
let btn5 = document.querySelector("#sorting");

document.getElementById('visualize').addEventListener('click' , async function(){
    if(btn5.value == "Bubble sort"){
    let arr = document.querySelectorAll('.sort');
    disablesize();
    disablesortselect();
    await bubblesort(arr);
    }
    enablesize();
    enablesortselect();
});