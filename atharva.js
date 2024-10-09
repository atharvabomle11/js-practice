let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");


button.addEventListener("click",function(event){
    console.dir(event);
     let list = document.createElement("li");
     let del = document.createElement("button");
     del.innerText = "Delete";
     del.classList.add("delete");
     list.innerText = input.value;
     ul.appendChild(list);
     list.appendChild (del);
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});


// let btn = document.querySelectorAll(".delete");
// for(del of btn){
//     del.addEventListener("click",function(){
//        let par = this.parentElement;
//        par.remove();
//    });
// }
