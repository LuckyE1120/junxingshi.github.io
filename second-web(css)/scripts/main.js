//let myHeading=document.querySelector('h1');
//myHeading.textContent='Hello World!';

let myImage=document.querySelector('img')

myImage.onclick=function (){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/iu-1.jfif'){
        myImage.setAttribute('src','images/iu_2.jpg');
    }else{
        myImage.setAttribute('src','images/iu-1.jfif');
    }
}

let myButton=document.querySelector('button');
let  myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('Enter your name');
    if(!myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent="Welcome to IU's web "+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent="Welcome to IU's web "+storedName;
}

myButton.onclick=function () {
    setUserName();
}
