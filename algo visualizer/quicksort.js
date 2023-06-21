async function partition(arr , l , r){
    let i = l-1;
    arr[r].style.background='dark blue';
    let pivot = arr[r];
    for (let j = l; j <= r- 1; j++)
    {
        arr[j].style.background = "yellow";
        await delay(time);
        if (parseInt(arr[j].style.height) < parseInt( pivot.style.height))
        {
            if(i>=r){
            arr[i].style.background = "green";
            }
            i++;    
            swap(arr[i], arr[j]);
            arr[i].style.background = "red";
            await delay(time);
        }
        arr[j].style.background = "green";
    }
     if(i>=l){
        arr[i].style.background ="green";
     }
    
    await delay(time);
    swap(arr[i + 1], arr[r]);
    arr[r].style.background ="green";

    await delay(time);
    return i + 1;
}
async function quicksort(arr , l , r){
    if(l<r){
        let pInd = await partition(arr , l , r);
        await quicksort(arr , l  , pInd-1) ;
        await quicksort(arr , pInd+1 , r);  
    }
}
  let btn2= document.querySelector("#sorting");
document.getElementById('visualize').addEventListener('click' , async function(){
    if(btn2.value == "Quick sort"){
    let arr = document.querySelectorAll('.sort');
    let l=0;
    let r = parseInt(arr.length)-1;
    disablesize();
    disablesortselect();
    await quicksort(arr , l , r);
    for(let i=0; i<=r; i++)
    {
        await delay(time);
        arr[i].style.background='orange';
    }
    }
    enablesize();
    enablesortselect();
});