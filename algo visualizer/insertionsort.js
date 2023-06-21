async function insertionsort(arr)  
{  
    arr[0].style.background = "dark green";
    let i, key, j;  
    for (i = 1; i < arr.length; i++) 
    {  
        arr[i].style.background = "red";
        key = arr[i].style.height;  
        j = i - 1;  
        while (j >= 0 &&(parseInt( arr[j].style.height)) > (parseInt(key)))
        {  
            arr[j].style.background = "red";
            arr[j + 1].style.height = arr[j].style.height;  
            j--;  
    
        await delay(time);

        for(let s=0; s<i; s++)
            {
                arr[s].style.background= "dark green";
            }
        }
        arr[j + 1].style.height = key; 
        arr[i].style.background = "dark green"; 
    } 
} 
let btn3 = document.querySelector("#sorting");

document.getElementById('visualize').addEventListener('click' , async function(){
    if(btn3.value == "Insertion sort"){
    const arr = document.querySelectorAll('.sort');
    disablesize();
    disablesortselect();
    await insertionsort(arr);
    }
    enablesize();
    enablesortselect();
}); 
    