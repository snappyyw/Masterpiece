"use strict";
function power(a,b){
    if (b === 0) {
        return 1;
    }
    let res=1;
    for (let i = 0; i < b; i++) {
        res*= a;
    }
    return res;
};

function numInfo(a){
    let str="";
    if(typeof(a)!='number'){
        throw 'Это не число. Тваарь!';
    }
    if (a < 0) {
        str+="Число отрицательное; ";
    }
    else{
        str+="Число положительное; ";
    }
    if(a % 2 === 0){
        str+="Число четное; "
    }
    else{
        str+="Число не четное; ";
    }
    return str;
};
function Search(num,arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        res.push(i);
      }
  }
  return res;
};
function Search2(num,arr){
  let res=[];
  let index;
  for(let i=0;i<arr.length;i++){
    index = arr.indexOf(num, index);
    res.push(arr.indexOf(num, index));

  }
  return res;
};


let i=0;
dt=new Array("0000A0", "A00000", "00A000", "00A0A0", "A000A0", "A0A000");
function next_cl() {
 document.getElementById("link_1").style.backgroundColor='#'+dt[i++];
 if (i>=dt.length) i=0;
};
setInterval(next_cl,500);