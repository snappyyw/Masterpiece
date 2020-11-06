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


function Polidrom(str){
    let str2=str.split("").reverse().join("");
        if(str.toLowerCase()===str2.toLowerCase())
            return true;
        else
            return false;
}

function glas(str){
    let res=0;
    let glasArr = ['е','а','ё','о','э','я','и','ю','у','ы','Е','А','Ё','О','Э','Я','И','Ю','У','Ы'];
    let glasArrEng = ['A','E','I','O','U','Y','a','e','i','o','u','y'];
    for(let i = 0; i<str.length; i++)
    {
        if(glasArr.includes(str[i]) || glasArrEng.includes(str[i])){
            res+=1;
        }
    }
    return res;
}

class Auto{   
    constructor(name, year, price){
        this.name=name;
        this.year=year;
        this.price=price;
    }
    ride(){}
    refuel(){}
    getInfo(){
        return this.name + " " + this.year + " " + this.price;
    }
    idOlderThan(year){
        if(year>this.year){
            return true;
        }
        else{
            return false;
        }
    }
}

class ElectricСar extends Auto{
    constructor(name, year, price, battery){
        super(name, year, price);
        this.battery=battery;
    }
    ride(distance){
        this.battery = this.battery - distance*5;
        alert("Осталость заряда: " + this.battery);
    }

    refuel(charge){
        this.battery = this.battery + charge;
        alert("Теперь заряда: " + this.battery);
    }
    getInfo(){
        alert(super.getInfo() + " " + this.battery);
    }
    idOlderThan(year){
        if(super.idOlderThan(year)){
            alert("Да");
        }
        else{
            alert("Нет");
        }
    }
}

class DieselCar extends Auto{
    constructor(name, year, price, tank){
        super(name, year, price);
        this.tank=tank;
    }
    ride(distance){
        this.tank = this.tank - distance*3;
        alert("Осталость в баке: " + this.tank)
    }

    refuel(fuel){
        this.tank = this.tank + fuel;
        alert("Теперь в баке: " + this.tank);
    }
    getInfo(){
        alert(super.getInfo() + " " + this.tank);
    }
    idOlderThan(year){
        if(super.idOlderThan(year)){
            alert("Да");
        }
        else{
            alert("Нет");
        }
    }
}
let ford = new DieselCar("Ford",2005,250000,115);


