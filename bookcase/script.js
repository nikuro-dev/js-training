
// let a = 0;
// while (a < 50 ){
//   if (a%2 != 0){
//     console.log(a);
//   }
//   a++;
// }

// for (let i=0; i<50; i++){
//   if (i % 2 ===0){
//     document.write(i+"\n <br>");
//     console.log(i);
//   }
// }
// //constructor

// function Person(fname,lname){
//   this.firstname = fname;
//   this.lastname = lname;
// }
// Person.prototype.getfullname = function(){
//   return `${this.firstname} ${this.lastname}`;
// }
// // class Amir{
// //   constructor(fname, lname, age){
// //     this.fistname =fname;
// //     this.lastname = lname;
// //     this.age = age;
// //   }
// //   sayHello(){
// //     return `hello myname is ${this.fistname} ${this.lastname} and im ${this.age} and at last fuck u bitch`;

// //   }
// // }
// // let amir = new Amir("amir","bolouki",23);



// class Animal {
//   constructor(firstname ,lastname){
//     this.firstname =firstname;
//     this.lastname = lastname;
//   }
//   eat(){
//     console.log(`im ${this.firstname} and im eating.`)
//   }
//   walk(){
//     console.log(`im ${this.firstname} and im walking.`)
//   }
// }

// class Dog extends Animal{
//    constructor(firstname , lastname, age ){
//      super(firstname, lastname);
//      this.age = age;
//    }
//   woof(){
//     console.log("woof");
//   }
// }

// class Cat extends Animal{
//   constructor(firstname,lastname,age,race){
//     super(firstname, lastname);
//     this.age = age;
//     this.race = race;
//   }
//   meow(){
//     console.log("meow moew...");
//   }
// }


// let dog = new Dog("sag" , "toolesag",5);
// let cat = new Cat("goorba","catzadeh",4,"persian");

// console.log(dog.woof());
// console.log(dog.eat());

// console.log(cat.meow());
// console.log(cat.walk());
// c
// onsole.log(cat.race);
// Date

// const birth1 = new Date(1999, 6, 16 ,17, 52, 2);
// const birth = new Date(1999, 6, 16 ,17, 52, 2);
// console.log(birth.getTime());
// time1 = birth.getTime();
// time = birth1.getTime();

// if (time === time1){
//   console.log("same");
// }else{
//   console.log("not same");
// }
// function formatdate(dateobj){
//   const parts = {
//     year : dateobj.getFullYear(),
//     month : dateobj.getMonth() +1,
//     date : dateobj.getDate(),
//     hour : (dateobj.getHours() %12) || 12,
//     minute : dateobj.getMinutes().toString().padStart(2, "0"),
//     amorpm : dateobj.getHours()<12 ? "AM" : "PM"
//   }
//   return `${parts.year}/${parts.month}/${parts.date} ${parts.hour} : ${parts.minute} ${parts.amorpm}`;
// }

// const mydate = new Date();
// const mydateformatted = formatdate(mydate);

// const mydate = dayjs();
// console.log(mydate.format("YYYY/M/D h:mm A"));

// if (window.confirm("sure????")){
//   console.log("yes");
// }else{
//   console.log("noo");
// }
// const qSelector =document.querySelector('#page-banner');

// let result;
// const list = document.querySelector('ul');
// let li = document.querySelectorAll('li');
// result = list.children[1].children[1].innerHTML;
// result = list.firstElementChild;


// for(let element of li){
//   console.log(element);
// }





// console.log(result);




// congsole.log(qSelector);
//
//
//working with element

// const heading = document.createElement('h2');
// heading.innerHTML= `
// <ul>
//     <li>amir</li>
//     <li>bolouki</li>
// </ul>

// `;

// // const heading = document.createElement('h2');
// // heading.className = "amir";
// // heading.id = 'bolouki';
// // heading.setAttribute('color','blue');
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// li1.appendChild(document.createTextNode('amir'));
// li2.appendChild(document.createTextNode('bolouki'));

// ul.appendChild(li1,li2);

// console.log(ul);
// console.log(heading);
// document.querySelector(".add-book").addEventListener("click",
// function(e){
//   console.log("hrllo world");
//   e.preventDefault();


//   let result;
//   result = e.target;
//   result = e.type;
//   console.log(result);
// });
// document.querySelector(".add-book").addEventListener("mousedown",
// function(e){
//   console.log("down");
//   e.preventDefault();


//   let result;
//   result = e.target;
//   result = e.type;
//   console.log(result);
// });
// document.querySelector(".add-book").addEventListener("mouseup",
// function(e){
//   console.log("up");
//   e.preventDefault();


//   let result;
//   result = e.target;
//   result = e.type;
//   console.log(result);
// });
// document.querySelector(".add-book").addEventListener("mouseenter",
// function(e){
//   console.log("in");
//   e.preventDefault();


//   let result;
//   result = e.target;
//   result = e.type;
//   console.log(result);
// });
// document.querySelector(".add-book").addEventListener("mouseout",
// function(e){
//   console.log("out");
//   e.preventDefault();


//   let result;
//   result = e.target;
//   result = e.type;
//   console.log(result);
// });
// document.querySelector(".add-book").addEventListener("mousemove",
// function(e){
//   console.log("moving");
//   e.preventDefault();


//   let result;
//   result = e.target;
//   result = e.type;
//   console.log(result);
// });
// let mousexy = document.querySelectorAll('.title')[1];
// document.body.addEventListener('mousemove',
// function(e){
//   // console.log(`mokh x : ${e.offsetX} , mokh Y : ${e.offsetY}`);
//   mousexy.innerHTML = `mokh x : ${e.offsetX} , mokh Y : ${e.offsetY}`;
//   e.preventDefault();
// });
const inputText = document.querySelector('#book-add input');
const btn = document.querySelector('.btn');


// btn.addEventListener('click', function(e){
//   console.log(inputText.value);
//   inputText.value = '';
//   e.preventDefault();
// })
// ;
// inputText.addEventListener('keyup',function(e){
//   console.log(inputText.value);
// });

// inputText.addEventListener('focus',function(e){
//   console.log('selected');
// });
// inputText.addEventListener('blur',function(e){
//   console.log('unselect');
// });
const inputsearch = document.querySelector('#search input');
const cbox = document.querySelector('#hide input');
const heading = document.querySelectorAll('.title')[1];
const list = document.querySelector('ul');


cbox.addEventListener('change',function(e){
  if (cbox.checked){
    heading.style.display = 'none';
    list.style.display = 'none';
  }else{
    heading.style.display = 'initial';
    list.style.display = 'block';
  }
});
inputsearch.addEventListener('keyup', function(e){
  for (let book of list.children){
    if(book.children[1].textContent.indexOf(inputsearch.value) !== -1){
      book.style.display= 'flex';
    } else {
      book.style.display = 'none';
    }
  }
})

//localstorage---------------->
// localStorage.setItem('amir','bouki')

// localStorage.setItem('air','bouki')
// localStorage.setItem('amr','bouki')
// localStorage.setItem('ami','bouki')
// localStorage.setItem('mir','bouki')
// localStorage.removeItem('amir');
// localStorage.clear();

// const arr = ["amir1", "amir2"];
// const obj = {name:"amir" , age:23};
// localStorage.setItem("array",arr);
// const myarray = localStorage.getItem("array").split(',');

// localStorage.setItem('object', JSON.stringify(obj));
// const myobj = JSON.parse(localStorage.getItem('object'));


// console.log(myarray);
// console.log(myobj);

const vl = `<div class ="vl"></div>`;
const dl = `<button class= "delete">delete</button>`;

btn.addEventListener('click', function(e){
  const spanname= document.createElement('span');
  spanname.className= 'name';
  spanname.textContent = inputText.value;

  const li = document.createElement('li');
  li.innerHTML += vl;
  li.appendChild(spanname);
  li.innerHTML += dl;
  list.appendChild(li);

  storeToLocalStorage(inputText.value);
  inputText.value ='';
  e.preventDefault();

});
list.addEventListener('click', function(e){
  if (e.target.className === 'delete'){
    e.target.parentElement.remove();
    removeFromLocalStorage(e.target.parentElement.children[1].textContent);
  }
})
document.addEventListener('DOMContentLoaded', function(e){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = localStorage.getItem('tasks').split(',');
  }
  for(let item of tasks){
  const spanname= document.createElement('span');
  spanname.className= 'name';
  spanname.textContent = item;

  const li = document.createElement('li');
  li.innerHTML += vl;
  li.appendChild(spanname);
  li.innerHTML += dl;
  list.appendChild(li);
  }

})

function storeToLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks =[];
  }else{
    tasks = localStorage.getItem('tasks').split(',');
  }
  tasks.push(task);
  localStorage.setItem('tasks',tasks);
}

function removeFromLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks =[];
  }else{
    tasks = localStorage.getItem('tasks').split(',');
  }
  for (let i=0; i<tasks.length;i++){
    if (tasks[i] === task){
      tasks.splice(i,1);
    }
  }
  if (tasks.length === 0){
    localStorage.clear();
  }else{
    localStorage.setItem('tasks',tasks);
  }
}
// let books = list.children;
// for (let book of books){
//   console.log(book.children[1].textContent);

// }
