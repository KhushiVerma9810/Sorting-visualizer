async function merge(arr , l , m , r){
const n1 = m-l+1;
const n2 = r-m;
let left = new Array(n1);
let right = new Array(n2);
for(let i=0; i<n1; i++){
    await delay(time);
    arr[l+i].style.background = 'yellow';
    left[i] = arr[l+i].style.height;
    
}
for(let j=0; j<n2; j++){
    await delay(time);
    arr[m +j+1].style.background = 'blue';
right[j] = arr[m+j+1].style.height;
}
let i=0 , j=0 , k=l;
while(i<n1 && j<n2){
    await delay(time);
    if(parseInt(left[i])<=parseInt(right[j])){
        if((n1 + n2)==arr.length){
    arr[k].style.background = 'green';
        }
        else{
            arr[k].style.background='light green';
        }
   
    arr[k].style.height = left[i];
        i++;
        k++;
    }
    else{
        if((n1 +n2) ==arr.length){
            arr[k].style.background='green';
        }
        else{
            arr[k].style.background = 'light blue';
        }
        arr[k].style.height = right[j];
        j++;
        k++;
    }
}
while (i < n1) {
    await delay(time);
    if((n1+n2)==arr.length){
        arr[k].style.background='green';
    }
    else{
        arr[k].style.background = 'light green';
    }
    arr[k].style.height = left[i];
    i++;
    k++;
}

while(j<n2){
await delay(time);
    if((n1 +n2)==arr.length){
        arr[k].style.background = 'green';

    }
    else{
        arr[k].style.background = 'light green';
    }
    arr[k].style.height = right[j];
    j++;
    k++;
}
}
async function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    const m =l+ Math.floor((r-l)/2);
    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
}
let btn = document.querySelector("#sorting");

document.getElementById('visualize').addEventListener('click' , async function(){
    if(btn.value == "Merge sort"){
    let arr = document.querySelectorAll('.sort');
    let l=0;
    let r = parseInt(arr.length)-1;
    disablesize();
    disablesortselect();
    await mergeSort(arr , l , r);
    }
    enablesize();
    enablesortselect();
});