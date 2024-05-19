//TASK:1
//-----------------------------------------
var l1 = {name:"person1",age:5};
var l2 = {age:5,name:"person1"};
let obj1=JSON.stringify(l1);
let obj2=JSON.stringify(l2);
var count=0;
if(Object.keys(obj1).length===Object.keys(obj2).length){
    for(key in JSON.parse(obj1)) { 
        if(obj1[key] === obj2[key]) {
            count++;
        }
        else {
            break;
        }
    }
}
if(count===Object.keys(JSON.parse(obj1)).length)
console.log("JSON objects is equal");
else console.log("JSON objects is not equal")
//-------------------------------------------
//TASK:2 & 3
//-------------------------------------------
var R=new XMLHttpRequest();
R.open("GET","https://restcountries.com/v3.1/all",true);
R.send();
R.onload=function(){
    let data=R.response;
    let result=JSON.parse(data);
     //TASK:2
    for(let i=0;i<result.length;i++){
        console.log(result[i].flags);  
    }
    //TASK:3
    for(let j=0;j<result.length;j++){
        console.log("NAME:",result[j].name.common,
        "   SUB-REGION:",result[j].subregion,
        "   POPULATION:",result[j].population);
    }
}

