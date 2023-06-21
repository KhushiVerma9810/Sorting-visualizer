async function heapify(arr,n,i){
    let largest = i;
    
    const l = 2*i +1;
    const r = 2*i +2;
    if( l < n && (parseInt(arr[r].style.height)>parseInt(arr[largest].style.height))){
        //  if(largest !== i){
        //    arr[largest].style.background = "yellow";
        //  }
        arr[l].style.background="red";
        // await delay(time);
        largest = l;
        // arr[l].style.height;
     }
     if (r < n && (parseInt(arr[r].style.height) > parseInt(arr[largest].style.height))){
        // if(largest !== i){
        //     arr[largest].style.background = "yellow";
        // }
        arr[r].style.background = "red";
        // await delay(time);
        largest = r;
        // arr[r].style.height;
     }
  //    else{
       
  //     arr[i].style.background = 'red';
  // } 
     if (largest !== i) {
        swap(arr[i], arr[largest]);
        arr[i].style.background = "blue";
        arr[largest].style.background = "yellow";

      await  heapify(arr,n, largest);  
}
}

async function heapsort(arr , n){
    await delay(time);
    for (let i = Math.floor(n/ 2) - 1; i >= 0; i--){
   await  heapify(arr,n , i );
    }
    for(let i= n - 1; i>0; i--){
      await delay(time);
        swap(arr[0], arr[i]);
        arr[0].style.background = "blue";
        arr[i].style.background = "yellow";
       await heapify(arr ,i,0);

       arr[0].style.background = "yellow";
    }
}
let btn6 = document.querySelector("#sorting");

document.getElementById('visualize').addEventListener('click' , async function(){
    if(btn6.value == "Heap sort"){
    let arr = document.querySelectorAll('.sort');
    let n = arr.length;
    disablesize();
    disablesortselect();
    await heapsort(arr ,n);
    }
    enablesize();
    enablesortselect();
});