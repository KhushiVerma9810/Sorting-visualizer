async function selectionSort(arr)
{
    let i, j, min_idx;

    for (i = 0; i < arr.length -1; i++)
    {
        min_idx = i;
        arr[i].style.background = "blue";

        for (j = i + 1; j < arr.length; j++){

        if (parseInt(arr[j].style.height) < parseInt(arr[min_idx].style.height)){

        if(min_idx !== i){
            arr[min_idx].style.background = "red";
        }
        min_idx = j;
    } 
    else{
       
        arr[j].style.background = 'yellow';
    }   
}

             await delay(time);
        swap(arr[i] , arr[min_idx]);
        arr[min_idx].style.background = "yellow";
        arr[i].style.background = "green";
    }
}
let btn4 = document.querySelector("#sorting");

document.getElementById('visualize').addEventListener('click' , async function(){
    if(btn4.value == "Selection sort"){
    const arr = document.querySelectorAll('.sort');
    disablesize();
    disablesortselect();
    await selectionSort(arr);
    }
    enablesize();
    enablesortselect();
}); 